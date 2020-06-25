import React, {Component} from 'react';
import ProgramInfo from "./programInfo"
import {Container, Row, Col, Form, Button, Modal, Dropdown} from 'react-bootstrap';
import banner from './assets/placeholder.png';
// import './people_and_mask.css'
import './IAmDifferentForm.css'
import programInfo from './programInfo';
import Footer from './footer-temp';
import FormComponent from './formComponent';
import fire from './firebase/file';
import different_img from "./assets/Different.jpg";

class IAmDifferentForm extends Component {

  constructor(props) {
    super(props);
    this.state={
      file: null,
      show:false,
      show2:false,
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleModal=this.handleModal.bind(this);
    this.handleModal2=this.handleModal2.bind(this);
    this.cancelCourse=this.cancelCourse.bind(this);
  }

  handleModal() {
    console.log("handleModal");
    this.setState({show:!this.state.show})
  }
  handleModal2() {
    console.log("handleModal2");
    this.setState({show2:!this.state.show2})
  }
  cancelCourse() {
    document.getElementById('firstName').value="";
    document.getElementById('lastName').value="";
    document.getElementById('userEmail').value="";
    document.getElementById('description').value="";
    document.getElementById('location').value="";
    document.getElementById('date').value="";
    document.getElementById('fileInput').value="";
  }

  checkValue() {
    var senderFullNameLength=document.getElementById('senderFullName').value.length;
    var senderCityLength=document.getElementById('senderCity').value.length;
    var senderEmailLength=document.getElementById('senderEmail').value.length;
    var subjectFirstNameLength=document.getElementById('subjectFirstName').value.length;
    var subjectOccupationLength=document.getElementById('subjectOccupation').value.length;
    var subjectEthnicityLength=document.getElementById('subjectEthnicity').value.length;
    var subjectCityLength=document.getElementById('subjectCity').value.length;
    var subjectFile=document.getElementById('subjectFile').value;
    var result=senderFullNameLength*senderCityLength*senderEmailLength*subjectFirstNameLength*subjectOccupationLength*subjectEthnicityLength*subjectCityLength*subjectFile;
    console.log(result);
    if(result==0) {
        return true;
      }else {
        return false;
      }

  }
  saveToFb() {
    var senderFullName=document.getElementById('senderFullName').value;
    var senderCity=document.getElementById('senderCity').value;
    var senderEmail=document.getElementById('senderEmail').value;
    var subjectFirstName=document.getElementById('subjectFirstName').value;
    var subjectOccupation=document.getElementById('subjectOccupation').value;
    var subjectEthnicity=document.getElementById('subjectEthnicity').value;
    var subjectCity=document.getElementById('subjectCity').value;

    var testFinal={
      senderFullName:senderFullName,
      senderCity:senderCity,
      senderEmail:senderEmail,
      subjectFirstName:subjectFirstName,
      subjectOccupation: subjectOccupation,
      subjectEthnicity:subjectEthnicity,
      subjectCity:subjectCity
    }
    let messageRef=fire.database().ref('formsTest').orderByKey().limitToLast(100);
    fire.database().ref('formsTest').push(testFinal);
    return testFinal;
  }

  onChange(e){
    this.setState({file: e.target.files[0]})
  }

  async submitForm(e){
    if(this.checkValue()) {
      this.handleModal2()
    }else {
      var formInputs = this.saveToFb();

      e.preventDefault();
    
      await this.uploadFile(this.state.file, formInputs);
      this.handleModal()
    }
    
    
    
  }

  async uploadFile(file, formInputs) {
    var formData = new FormData();
    formData.append('subjectPhoto', file);
    formData.append('senderFullName', formInputs['senderFullName']);
    formData.append('senderCity', formInputs['senderCity']);
    formData.append('senderEmail', formInputs['senderEmail']);
    formData.append('subjectFirstName', formInputs['subjectFirstName']);
    formData.append('subjectOccupation', formInputs['subjectOccupation']);
    formData.append('subjectEthnicity', formInputs['subjectEthnicity']);
    formData.append('subjectCity', formInputs['subjectCity']);

    const response = await fetch('i_am_different_form_photos.php', {
      method: 'POST',
      body: formData
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }
    render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={different_img}/>
            </Col>
          </Row>

          <ProgramInfo subtitle="Game Interaction" title="I'M DIFFERENT JUST LIKE YOU" artistName="TAIWANfest" url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/" color="#0C3866"></ProgramInfo>
          <Row className="mainContents" style={{marginTop:"100px"}}>
            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <p className="contentsInParagraph">In the face of a worldwide pandemic and historical global issues, it is important to remember that <b>We are all in this together.</b>  We have relied heavily on the bravery, dedication, and hard work of front-line workers more than before, and TAIWANfest looks to recognize the differences among this diverse and essential group of people. We should view others without prejudices, just as they have treated the ill without discrimination for race, gender, or sexual orientation. <br></br><br></br>

On this page, front-line workers and organizations can submit their photo(s) to be part of the evolving virtual exhibition <b>“I’m different, just like you! - We are all in this together”.</b> It may take a few business days after the listed time above for your photo to be shown. An email will be sent once the photo has been approved.
</p>
            </Col>
          </Row>

          <Row>
           <Col  xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}bsCustomPrefix="hed" className='hed'
            >INFO ABOUT THE PHOTO</Col>
          </Row>

          <Form encType="multipart/form-data">
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' className=  'form_field_text' type="text"  id="senderFullName" placeholder="Sender Full Name" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' className=  'form_field_text' type="text"  id="senderCity" placeholder="City And Country" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' className=  'form_field_text' type="email" id="senderEmail" placeholder="Email" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' className=  'form_field_text'type="text"  id="subjectFirstName" placeholder="Subject's First Name" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                  <Form.Control bsCustomPrefix = 'form_field_text' className=  'form_field_text' id="subjectOccupation" as="select" >
                    <option>Doctor</option>
                    <option>Firefighter</option>
                    <option>Healthcare Technician</option>
                    <option>Nurse</option>
                    <option>Paramedic</option>
                    <option>Pharmacist</option>
                    <option>Police</option>
                    <option>Social Service Worker</option>
                    <option>Therapist</option>
                  </Form.Control>

                </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' className=  'form_field_text'type="text" id="subjectEthnicity" placeholder="Ethnicity" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' className=  'form_field_text'type="text" id="subjectCity" placeholder="City, Country" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <Form.File.Input onChange={this.onChange} required bsCustomPrefix='form-file-input' id="subjectFile"className=  'form_field_text' name="subjectPhoto"/>
            <p id="hint" >File must be .jpg or .png and under 1MB</p>
              </Col>
            </Form.Row>

            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
                <Form.Check aria-label="option 1"/>
                <input type="checkbox" class="custom-control-input" id="checkbox-3"></input>
              </Col>

              <Col xl={{span:7, offset:0}} lg={{span:7, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
                <div className="formConsent">I consent for the submitted photo(s) to be used by TAIWANfest in the “I’m different, just like you! -
                   We are all in this together” project.</div>
              </Col>
            </Form.Row>

            <Form.Row style={{marginBottom:"50px"}}>
                <Button onClick={this.submitForm} variant="primary"  className="btn-1" type="submit" bsPrefix="submit_button">SUBMIT</Button>
            </Form.Row>
            <Form.Row style={{marginBottom:"50px"}}>
              <Button bsPrefix="share_button" variant="primary"  className="btn-2"type="submit">SHARE WITH FRIENDS</Button>
            </Form.Row>
          </Form>
     
          <Modal show={this.state.show2}>
            <Modal.Header> Modal Head Part</Modal.Header>
            <Modal.Body>
              Please submit all the required folder
            </Modal.Body>
            <Modal.Footer>
              <Button className="btnModal" bsPrefix="submit_button" onClick={()=>this.handleModal2()} >Close</Button>
              
            </Modal.Footer>
          </Modal>
               
          <Modal show={this.state.show}>
            <Modal.Header> Modal Head Part</Modal.Header>
            <Modal.Body>
              Your submission done2
            </Modal.Body>
            <Modal.Footer>
              <Button className="btnModal" bsPrefix="submit_button" onClick={()=>this.handleModal()} >Close</Button>
              
            </Modal.Footer>
          </Modal>
            
    </Container>
    <Footer/>
  </div>
    );
  }
};

export default IAmDifferentForm;
