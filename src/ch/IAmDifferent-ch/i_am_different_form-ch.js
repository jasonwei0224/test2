import React, {Component} from 'react';
import ProgramInfo from "../../programInfo"
import {Container, Row, Col, Form, Button, Dropdown} from 'react-bootstrap';
import banner from '../../assets/placeholder.png';
// import './people_and_mask.css'
import './IAmDifferentForm-ch.css'
import Footer from '../../footer-temp';
import fire from '../../firebase/file';


class IAmDifferentForm extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      file: null
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  saveToFb() {
    console.log("Inside submitForm()");
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
    var formInputs = this.saveToFb();

    e.preventDefault();

    await this.uploadFile(this.state.file, formInputs);

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
            <Col lg={{span:12, offset:0}} xs={{span:12, offset:0}}>
              <img src={banner} style={{width:"100%", height: "auto"}}/>
            </Col>
          </Row>

          <ProgramInfo subtitle="Game Interaction" title="I'M DIFFERENT JUST LIKE YOU" artistName="TAIWANfest" url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/" color="#0C3866"></ProgramInfo>
          <Row className="mainContents" style={{marginTop:"100px"}}>
            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <p className="contentsInParagraph"> CHINESE VERSION Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent eget tincidunt felis, sit amet congue lectus.
              Praesent auctor sodales ligula sed dignissim. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Proin facilisis orci finibus magna aliquet, a
              elementum purus dignissim.</p> <br />
              <p className="contentsInParagraph">Fusce sed nisl rhoncus, imperdiet
              elit vel, imperdiet ex. Quisque lacus ex, pulvinar eget tellus
              id, suscipit cursus enim. Integer nec erat non leo vulputate
              fermentum sed at massa. Cras et turpis sagittis, malesuada
              velit at, semper velit. Sed porta nibh et mauris malesuada,
              vel placerat tellus feugiat. </p>
            </Col>
          </Row>

          <Row>
           <Col  xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}
             style = {{backgroundColor: "#D9C739", marginBottom:"2%", paddingTop:"0.5%", paddingBottom:"0.5%",fontWeight:"bold"}} ><p className="form-section-title">INFO ABOUT THE PHOTO</p></Col>
          </Row>

          <Form encType="multipart/form-data">
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' type="text"  id="senderFullName" placeholder="Sender Full Name" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' type="text"  id="senderCity" placeholder="City And Country" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' type="email" id="senderEmail" placeholder="Email" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text' type="text"  id="subjectFirstName" placeholder="Subject's First Name" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                  <Form.Control bsCustomPrefix = 'form_field_text' id="subjectOccupation" as="select" >
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
                <Form.Control bsCustomPrefix = 'form_field_text'type="text" id="subjectEthnicity" placeholder="Ethnicity" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'form_field_text'type="text" id="subjectCity" placeholder="City, Country" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <Form.File.Input onChange={this.onChange} required bsCustomPrefix='form-file-input' name="subjectPhoto"/>
            <p id="hint" >File must be .jpg or .png and under 1MB</p>
              </Col>
            </Form.Row>

            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
                <Form.Check aria-label="option 1"/>
                <input type="checkbox" class="custom-control-input" id="checkbox-3"></input>
              </Col>

              <Col xl={{span:9, offset:0}} lg={{span:10, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
                <div className="formConsent">"I consent the submitted photo for the use in the &quot;We are all in this together&quot; project"</div>
              </Col>
            </Form.Row>

            <Form.Row style={{marginBottom:"50px"}}>
                <Button onClick={this.submitForm} variant="primary" type="submit" bsPrefix="submit_button">Submit</Button>
            </Form.Row>
            <Form.Row style={{marginBottom:"50px"}}>
              <Button bsPrefix="share_button" variant="primary" type="submit">SHARE WITH FRIENDS</Button>
            </Form.Row>
          </Form>
    </Container>
    <Footer/>
  </div>
    );
  }
};

export default IAmDifferentForm;