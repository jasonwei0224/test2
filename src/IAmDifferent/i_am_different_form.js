import React, {Component} from 'react';
import ProgramInfo from "../programInfo"
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap';
import './IAmDifferentForm.css'
import Footer from '../footer-temp';
import fire from '../firebase/file';
import different_img from "../assets/Different.jpg";
import Button1 from "../modules/Button1";
import FormSectionTitle from "../modules/FormSection_Title"
import FormComponent from "../modules/formComponent"
import FormFile from "../modules/FormFile"
import FormConsent from "../modules/FormConsent"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle from "../modules/MainContents_Middle"
import IncompleteFormModal from "../incompleteFormModal";
import SuccessModal from '../successModal';
import InvalidFileModal from '../invalidFileModal';
import MainContents_WithBold from "../modules/MainContents_WithBold"


class IAmDifferentForm extends Component {

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
    console.log("handleModal");
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
    var senderFullNameLength=document.getElementById('senderFullName').value.length;
    var senderCityLength=document.getElementById('senderCity').value.length;
    var senderEmailLength=document.getElementById('senderEmail').value.length;
    var subjectFirstNameLength=document.getElementById('subjectFirstName').value.length;
    var subjectOccupationLength=document.getElementById('subjectOccupation').value.length;
    var subjectEthnicityLength=document.getElementById('subjectEthnicity').value.length;
    var subjectCityLength=document.getElementById('subjectCity').value.length;
    var subjectFile=document.getElementById('subjectFile').value.length;
    var result=senderFullNameLength*senderCityLength*senderEmailLength*subjectFirstNameLength*subjectOccupationLength*subjectEthnicityLength*subjectCityLength*subjectFile;
    
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
    console.log("submit");

    if(this.checkValue()) {
      this.handleModal2()
    }else {
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
      await this.uploadFile(this.state.file, testFinal);
    }
  }

  // fetches php and saves to fb on success
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
    .then(data => data.text())
    .then(data=> {
      if(data==="valid") {
        this.handleModal();
        let messageRef=fire.database().ref('formsTest').orderByKey().limitToLast(100);
        fire.database().ref('formsTest').push(formInputs);
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
        <Container fluid>
          <Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={different_img}/>
            </Col>
          </Row>

          <ProgramInfo subtitle="I'm different, just like you !" title="WE ARE ALL IN THIS TOGETHER" artistName="TAIWANfest" url="https://www.facebook.com/sharer/sharer.php?u=https://gallery.torontotaiwanfest.ca/#/IAmDifferentForm" color="#0C3866"></ProgramInfo>

          <MainContents_WithBold contents="In the face of a worldwide pandemic and historical global issues, it is important to remember that" bold=' We are all in this together.'contents2= " We have relied heavily on the bravery, dedication, and hard work of front-line workers more than before, and TAIWANfest looks to recognize the differences among this diverse and essential group of people. We should view others without prejudices, just as they have treated the ill without discrimination for race, gender, or sexual orientation."></MainContents_WithBold>
          <MainContents_WithBold contents="On this page, front-line workers and organizations can submit their photo(s) to be part of the evolving virtual exhibition" bold=' “I’m different, just like you! - We are all in this together”. ' contents2=" It may take a few business days after the listed time above for your photo to be shown. An email will be sent once the photo has been approved."></MainContents_WithBold>



          <FormSectionTitle title="INFO ABOUT THE PHOTO"></FormSectionTitle>

          <Form encType="multipart/form-data">

            <FormComponent formId="senderFullName" formClassName="inputfield_form" placeHolder="Sender Full Name"> </FormComponent>
            <FormComponent formId="senderCity" formClassName="inputfield_form" placeHolder="City And Country"> </FormComponent>
            <FormComponent formId="senderEmail" formClassName="inputfield_form" placeHolder="Email"> </FormComponent>
            <FormComponent formId="subjectFirstName" formClassName="inputfield_form" placeHolder="Subject's First Name"> </FormComponent>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                  <Form.Control bsCustomPrefix = 'inputfield_selection' className=  'inputfield_selection' id="subjectOccupation" as="select" >
                    <option>Doctor</option>
                    <option>Firefighter</option>
                    <option>Healthcare Technician</option>
                    <option>Nurse</option>
                    <option>Paramedic</option>
                    <option>Pharmacist</option>
                    <option>Police</option>
                    <option>Social Service Worker</option>
                    <option>Therapist</option>
                    <option>Other</option>
                  </Form.Control>

                </Col>
            </Form.Row>

            <FormComponent formId="subjectEthnicity" formClassName="inputfield_form" placeHolder="Ethnicity"> </FormComponent>
            <FormComponent formId="subjectCity" formClassName="inputfield_form" placeHolder="City, Country"> </FormComponent>


            <FormFile FormId="subjectFile" onChange={this.onChange} hint="File must be .jpg or .png and under 1MB"></FormFile>

            <FormConsent inputId="iamdiff-consent-en" consent= "I consent for the submitted photo(s) to be used by TAIWANfest in the “I’m different, just like you! - We are all in this together” project."></FormConsent>


            <Button1 onclick={this.submitForm} title="SUBMIT" togoUrl="https://gallery.torontotaiwanfest.ca/#/IAmDifferentForm"></Button1>

          </Form>

      <IncompleteFormModal show={this.state.show2} onClick={()=>this.handleModal2()} />
      <SuccessModal show={this.state.show} onClick={()=>this.handleModal()} />
      <InvalidFileModal show={this.state.showInvalidFile} onClick={()=>this.invalidFile()} />


    </Container>
    <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
  </div>
    );
  }
};

export default IAmDifferentForm;
