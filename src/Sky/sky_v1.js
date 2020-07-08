import React, {Component} from 'react';
import ImageSlider from '../imageSlider';
import ProgramInfo from "../programInfo";
import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap';
import banner from '../assets/placeholder.png';
import Footer from '../footer-temp';
import'./sky_v1.css';
import fire from '../firebase/file';
import Button1 from "../modules/Button1";
import Second_Title from "../modules/Second_Title"
import FormSectionTitle from "../modules/FormSection_Title"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import FormComponent from "../modules/formComponent"
import FormConsent from "../modules/FormConsent"
import FormFile from "../modules/FormFile"
import IncompleteFormModal from "../incompleteFormModal";
import SuccessModal from '../successModal';
import InvalidFileModal from '../invalidFileModal';
import mainImage from '../assets/sky4.jpeg';
import {Helmet} from "react-helmet";

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
    var subjectFile=document.getElementById('subjectFile').value.length;

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
        date:date,
        from:"torontotaiwanfest"
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
        {/*<ImageSlider className="mainImage"/>*/}
        <Container fluid>
          <Row>
              <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
                <img className="main_image" src={mainImage}/>
              </Col>
          </Row>

        <ProgramInfo subtitle="I'm different, just like you!" title="UNDER THE SAME SKY PROJECT" artistName="TAIWANfest" url="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2Fsky&amp;src=sdkpreparse" color="#D9C739">
        </ProgramInfo>

        <MainContents_First style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon."></MainContents_First>

              <MainContents_Middle contents=" Despite our
                geographical differences, we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
                together. "></MainContents_Middle>
          <MainContents_Middle contents=" In all that the world has gone through, the unchanging sky gives
                people a sense of hope and anticipation for the feeling of a
                normal day to come again. Furthermore, Indigenous teachings and
                stories about the sky can guide us in these times.
                By giving each image a background story, we can implore others to
                look to the sky and gain strength."></MainContents_Middle>


        <Second_Title secondTitle="Under the same sky project"></Second_Title>

        <MainContents_Important contents="Be part of the art with our Under the same sky project. Follow us on social media to find out when to take a photo of the sky wherever you are globally and upload your photo for a chance to be featured. Click the link below for more details."></MainContents_Important>


        <FormSectionTitle title="PHOTOGRAPHER"></FormSectionTitle>

        <Form encType="multipart/form-data">

          <FormComponent formId="firstName" formClassName="inputfield_form" placeHolder="First Name"> </FormComponent>
          <FormComponent formId="lastName" formClassName="inputfield_form" placeHolder="Last Name"> </FormComponent>
          <FormComponent formId="userEmail" formClassName="inputfield_form" placeHolder="Email"> </FormComponent>

          <FormSectionTitle title="PHOTO INFO"></FormSectionTitle>

          <Form.Row style={{marginBottom:"30px"}}>

              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control id="description" as ="textArea" className="inputfield" type="text" placeholder="Description" size="lg"/>
              </Col>
          </Form.Row>

          <FormComponent formId="location" formClassName="inputfield_form" placeHolder="Location"> </FormComponent>
          <FormComponent formId="date" formClassName="inputfield_form" placeHolder="Date"> </FormComponent>




          <FormFile FormId="subjectFile" onChange={this.onChange} hint="File must be .jpg or .png and under 1MB"></FormFile>

          <FormConsent inputId="checkbox-3" consent= "I consent TAIWANfest to use the submitted photo(s) as part of the &quot;Under the same sky&quot; Project."></FormConsent>


            <Button1 onclick={this.submitForm} title="SUBMIT" togoUrl="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2Fsky&amp;src=sdkpreparse"></Button1>

        </Form>

        <IncompleteFormModal show={this.state.show2} onClick={()=>this.handleModal2()} />
        <SuccessModal show={this.state.show} onClick={()=>this.handleModal()} />
        <InvalidFileModal show={this.state.showInvalidFile} onClick={()=>this.invalidFile()} />

        </Container>
      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>

    );
  }

}

export default SkyV1;
