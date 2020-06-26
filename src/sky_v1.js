import React, {Component} from 'react';
// import ImgSlider from './img_slider';
import ImageSlider from './imageSlider';
import ProgramInfo from "./programInfo";
import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button, Modal, Dropdown} from 'react-bootstrap';
import banner from './assets/placeholder.png';
import Footer from './footer-temp';
// import'./sky_v1.css';
import fire from './firebase/file';

class SkyV1 extends Component {

  constructor(props) {
    super(props);
    this.state={
      file: null,
      show:false,
      show2:false,
      showInvalidFile:false
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleModal=this.handleModal.bind(this);
    this.handleModal2=this.handleModal2.bind(this);
    this.cancelCourse=this.cancelCourse.bind(this);
    this.invalidFile=this.invalidFile.bind(this);
  }

  handleModal() {
    this.setState({show:!this.state.show})
  }

  handleModal2() {
    console.log("handleModal2");
    this.setState({show2:!this.state.show2})
  }

  invalidFile() {
    this.setState({showInvalidFile:!this.state.showInvalidFile});
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
    var firstNameLength=document.getElementById('firstName').value.length;
    var lastNameLength=document.getElementById('lastName').value.length;
    var userEmailLength=document.getElementById('userEmail').value.length;
    var descriptionLength=document.getElementById('description').value.length;
    var locationLength=document.getElementById('location').value.length;
    var dateLength=document.getElementById('date').value.length;
    var subjectFile=document.getElementById('subjectFile').value

    var result=firstNameLength*lastNameLength*userEmailLength*descriptionLength*locationLength*dateLength*subjectFile;

    if(result==0) {
        return true;
      }else {
        return false;
      }

  }

  onChange(e){
    this.setState({file: e.target.files[0]})
  }

  async submitForm(e){
    e.preventDefault();
    if(this.checkValue()) {
      this.handleModal2();
    } else {
      var firstName=document.getElementById('firstName').value;
      var lastName=document.getElementById('lastName').value;
      var userEmail=document.getElementById('userEmail').value;
      var description=document.getElementById('description').value;
      var location=document.getElementById('location').value;
      var date=document.getElementById('date').value;

      var testFinal={
        firstName:firstName,
        lastName:lastName,
        userEmail:userEmail,
        description:description,
        location:location,
        date:date
      }
      await this.uploadFile(this.state.file, testFinal);
    }

  }

  // fetches php and saves to fb on success
  async uploadFile(file, formInputs) {

      var formData = new FormData();
      formData.append('skyPhoto', file);
      formData.append('firstName', formInputs['firstName']);
      formData.append('lastName', formInputs['lastName']);
      formData.append('userEmail', formInputs['userEmail']);
      formData.append('description', formInputs['description']);
      formData.append('location', formInputs['location']);
      formData.append('date', formInputs['date']);

      const response = await fetch('sky_form_photos-en.php', {
        method: 'POST',
        body: formData
      })
      .then(data => data.text())
      .then(data=> {
        if(data==="valid") {
          this.handleModal();
          let messageRef=fire.database().ref('skyTest').orderByKey().limitToLast(100);
          fire.database().ref('skyTest').push(formInputs);
        } else if(data==="invalid") {
          this.invalidFile();
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
      {/* <ImgSlider/> */}
      <ImageSlider />
      <Container fluid>

      <Row>
        <Col>
          <img src="" style={{width:"100%", height:"auto", margin:"0px", padding:"0px"}}/>
        </Col>
      </Row>
      <ProgramInfo subtitle="I'm different, just like you!" title="UNDER THE SAME SKY PROJECT" artistName="TAIWANfest" url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/" color="#D9C739">
      </ProgramInfo>

      <Row className={"mainContents"} style={{marginTop:"100px"}}>
          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
            <p className="contentsInParagraph">
              What is something that you can see when you look up, no matter
              wherever you are in the world? The sky is one constant no matter
              where you are and what time of day, it is there above the horizon.
              <br />
      </p>      <p className="contentsInParagraph">
              Working with photographers in Canada and Taiwan, Vancouver
              TAIWANfest presents Eight massive lanterns at šxʷƛ̓ənəq Xwtl'e7énḵ
              Square (formally known as Vancouver Art Gallery North Plaza)
               in downtown Vancouver. These images show that despite our
               geographical differences, we all look towards that same sky that
               looms over our heads, further reaffirming that we are all in this
               together. Sky is built on the concept of removing the influence
                of colour; by looking past our differences, we can see that we
                 are one and the same.<br></br>
        </p>    <p className="contentsInParagraph">
              In all that the world has gone through, the unchanging sky gives
              people a sense of hope and anticipation for the feeling of a
              normal day to come again. Furthermore, Indigenous teachings and
              stories about the sky can guide us in these times.
              By giving each image a background story, we can implore others to
              look to the sky and gain strength.<br></br>
        </p>    <p className="contentsInParagraph">
              Your experience and view of the sky will be different depending on
               the time of day. These lanterns will create a whole new dynamic
               look and feel through the use of LED lights in the evenings.<br></br>
          </p>  <p className="contentsInParagraph">
              As the province is working to reopen the economy in a safe manner
              and more and more people are getting back to a new normal, please
              follow all public health guidelines to protect yourself and others
               from COVID-19. Individuals should monitor their health for signs
               and symptoms of COVID-19. And if you’re not feeling well, they
               recommend staying home at this time. Respect social-distancing
               measures when outdoors and visiting the exhibit. Wear a face
               covering to protect yourself and others, especially when
               social-distancing is not possible such as on transit. By visiting
                the on-site “Sky” activation, you acknowledge that there are
                inherent risks associated with the COVID-19 Pandemic and will
                not hold ACSEA or our programming partners liable for your health. <br></br>

            </p>
          </Col>
      </Row>
      <Row>
        <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}><p className ="second_title">Under the same sky project</p></Col>
      </Row>
      <Row>
        <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
          <p className="project_content">Be part of the art with our Under the same sky project. Follow us on social media to find out when to take a photo of the sky wherever you are globally and upload your photo for a chance to be featured. Click the link below for more details.</p>
        </Col>
      </Row>

      <Row>
        <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} bsCustomPrefix="hed2" className='hed2' >Photographer</Col>
      </Row>

      <Form encType="multipart/form-data">
        <Form.Row style={{marginBottom:"30px"}}>

            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <Form.Control id="firstName" className={"inputfield"} type="text" placeholder="First Name" required size="lg"/>
            </Col>

        </Form.Row>
        <Form.Row style={{marginBottom:"30px"}}>

            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <Form.Control id="lastName" className="inputfield" type="text" placeholder="Last Name" required size="lg"/>
            </Col>
        </Form.Row>
        <Form.Row style={{marginBottom:"30px"}}>

            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <Form.Control id="userEmail"  className="inputfield"type="text" placeholder="Email" required size="lg"/>
            </Col>
        </Form.Row>


      <Row>
        <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}
          bsCustomPrefix="hed" className='hed' style={{backgroundColor: "#D9C739",
           marginTop:"2%", marginBottom:"2%", paddingTop:"0.5%",paddingBottom:"0.5%", fontWeight:"bold"}}>Photo Info</Col>
      </Row>

      <Form.Row style={{marginBottom:"30px"}}>

          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <Form.Control id="description" as ="textArea" className="inputfield" type="text" placeholder="Description" size="lg"/>
          </Col>
      </Form.Row>


        <Form.Row style={{marginBottom:"30px"}}>

            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <Form.Control id="location" className="formContol" type="text" placeholder="Location" required size="lg"/>
            </Col>

        </Form.Row>
        <Form.Row style={{marginBottom:"30px"}}>

            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <Form.Control id="date" type="text" placeholder="Date" required size="lg"/>
            </Col>
        </Form.Row>

        <Form.Row style={{marginBottom:"30px"}}>

            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
            {/* <Form.File.Input required  onChange={this.SkyV1} ref={
              fileupload => {inputFile = fileupload;} */}
              <Form.File.Input required  onChange={this.onChange} id="subjectFile" bsPrefix='form-file-input' name="skyPhoto" />
              <p className="hint" >File must be .jpg or .png and under 1MB</p>
            </Col>
        </Form.Row>
        <Form.Row style={{marginBottom:"30px"}}>
          <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
            <Form.Check aria-label="option 1"/>
            <input type="checkbox" class="custom-control-input" id="checkbox-3" checked="" ></input>
          </Col>

          <Col xl={{span:7, offset:0}} lg={{span:9, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
            <div className="formConsent" style={{color:"#BE0027"}} >I consent TAIWANfest to use the submitted photo(s) as part of the &quot;Under the same sky&quot; Project.</div>
          </Col>

        </Form.Row>
        <Form.Row style={{marginBottom:"50px"}}>
            <Button onClick={this.submitForm} bsPrefix="submit_button" className="btn-1" variant="primary" type="submit">SUBMIT</Button>
        </Form.Row>
        <Form.Row style={{marginBottom:"50px"}}>
          <Button  variant="primary" bsPrefix="share_button" className="btn-2">SHARE WITH FRIENDS</Button>
        </Form.Row>
      </Form>

      <Modal show={this.state.show2}>
            <Modal.Header>Incomplete Form</Modal.Header>
            <Modal.Body>
              Please fill out all fields
            </Modal.Body>
            <Modal.Footer>
              <Button className="btnModal" bsPrefix="submit_button" onClick={()=>this.handleModal2()} >Close</Button>

            </Modal.Footer>
          </Modal>

      <Modal show={this.state.show}>
        <Modal.Header>Success</Modal.Header>
        <Modal.Body>
          Thanks for submitting!
        </Modal.Body>
        <Modal.Footer>
          <Button className="btnModal" bsPrefix="submit_button" onClick={()=>this.handleModal()} >Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={this.state.showInvalidFile}>
        <Modal.Header>Invalid file type/size</Modal.Header>
        <Modal.Body>
          File must be .jpg or .png and under 1MB
        </Modal.Body>
        <Modal.Footer>
          <Button className="btnModal" bsPrefix="submit_button" onClick={()=>this.invalidFile()} >Close</Button>
        </Modal.Footer>
      </Modal>

      </Container>
      <Footer/>
    </div>
    );
  }

}

export default SkyV1;



  // SkyV1() {
  //   let inputFile = '';
  //   let ff= "";
  //   const fileChangeHandler2 = event =>{
  //     if(event.target.files[0] != null && inputFile != ''){
  //       let file_size = event.target.files[0].size;
  //       if(file_size/1000000 >1){
  //         console.log("file too big");
  //         console.log(inputFile);
  //         inputFile.focus();
  //         ff.setState = "invalid";
  //       }
  //       console.log(file_size);
  //       //or if you like to have name and type
  //       let file_name = event.target.files[0].name;

  //       console.log(file_name);
  //       let file_type = event.target.files[0].type;
  //       if(file_type != "image/png" && file_type != "image/jpg"){
  //         console.log("Incorrect File");
  //       }
  //       console.log(file_type);
  //       //do whatever operation you want to do here
  //       }
  //   }
  // }
