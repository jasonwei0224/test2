import React, {Component} from 'react';
import {Container, Row, Col, Form, Button, Modal, Dropdown} from 'react-bootstrap';
import ProgramInfo_ch from "../programInfo-ch"
import different_img from "../../assets/Different.jpg";

import './IAmDifferentForm-ch.css'
import FooterCH from "../footer-ch";
import fire from '../../firebase/file';
import ButtonCh from "../../modules/ButtonCh"
import FormSectionTitle_ch from "../../modules/FormSection_Title_ch"
import MainContents_First_ch from "../../modules/MainContents_First_ch";
import FormComponent from "../../modules/formComponent"
import FormFile from "../../modules/FormFile"
import FormConsent_ch from "../../modules/FormConsent_ch"
import IncompleteFormModal from "../../incompleteFormModal";
import SuccessModal from '../../successModal';
import InvalidFileModal from '../../invalidFileModal';

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
    console.log(result);
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
        subjectCity:subjectCity,
        from:"torontotaiwanfest"
      }
      await this.uploadFile(this.state.file, testFinal);
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
            <Col lg={{span:12, offset:0}} xs={{span:12, offset:0}}bsPrefix="image_col">
              <img src={different_img} style={{width:"100%", height: "auto"}}/>
            </Col>
          </Row>

          <ProgramInfo_ch subtitle="我跟你的相同，就是我們都不同" title="共同面對的我們" artistName="台灣文化節" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FIAmDifferentForm-ch&amp;src=sdkpreparse" color="#0C3866"></ProgramInfo_ch>
          <MainContents_First_ch contents="本計畫蒐集醫護人員、警消人員、科學家、衛生官員等防疫幕後英雄的照片，我們邀請您無論身在何處，若您自己或您的家人、朋友是醫護人員、警消人員、科學家、衛生官員等專業人士，請您不吝惜地分享給我們上述職業人士的照片，與我們一起，向世界各地的防疫英雄致敬。"></MainContents_First_ch>
          <FormSectionTitle_ch title="照片資訊"></FormSectionTitle_ch>

          <Form encType="multipart/form-data">

          <FormComponent formId="senderFullName" formClassName="inputfield_form" placeHolder="上傳者 英文姓名"></FormComponent>
          <FormComponent formId="senderCity" formClassName="inputfield_form" placeHolder="上傳者城市/國家"></FormComponent>
          <FormComponent formId="senderEmail" formClassName="inputfield_form" placeHolder="上傳者電子郵件"></FormComponent>
          <FormComponent formId="subjectFirstName" formClassName="inputfield_form" placeHolder="主角英文名字"></FormComponent>



            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                  <Form.Control bsCustomPrefix = 'inputfield_select_ch' className=  'inputfield_select_ch' id="subjectOccupation" as="select" >
                    <option>主角職業</option>
                    <option>醫生</option>
                    <option>消防員</option>
                    <option>醫療技術人員</option>
                    <option>護士</option>
                    <option>醫護人員</option>
                    <option>藥劑師</option>
                    <option>警察</option>
                    <option>社工</option>
                    <option>治療師</option>
                    <option>其他</option>
                  </Form.Control>

                </Col>
            </Form.Row>

            <FormComponent formId="subjectEthnicity" formClassName="inputfield_form" placeHolder="主角族裔(英文)"></FormComponent>
            <FormComponent formId="subjectCity" formClassName="inputfield_form" placeHolder="主角城市/國家"></FormComponent>



            <FormFile FormId="subjectFile" onChange={this.onChange} hint="檔案格式必須為jpg或png，且檔案大小在1MB以下"></FormFile>

            <FormConsent_ch inputId="checkbox-3" consent="我同意台灣文化節將我上傳的照片作為「共同面對的我們」節目的內容與相關宣傳使用。"></FormConsent_ch>



            <ButtonCh title="送出" onclick={this.submitForm} url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FIAmDifferentForm-ch&amp;src=sdkpreparse"></ButtonCh>


          </Form>

        <IncompleteFormModal show={this.state.show2} onClick={()=>this.handleModal2()} />
        <SuccessModal show={this.state.show} onClick={()=>this.handleModal()} />
        <InvalidFileModal show={this.state.showInvalidFile} onClick={()=>this.invalidFile()} />

    </Container>
    <FooterCH/>
  </div>
    );
  }
};

export default IAmDifferentForm;
