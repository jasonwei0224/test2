import React, {Component} from 'react';
import ImageSlider from '../../imageSlider';
import ProgramInfo_ch from "../programInfo-ch";
import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap';
import banner from '../../assets/placeholder.png';
import Footer from '../../footer-temp';
import './sky_v1-ch.css'
import fire from '../../firebase/file';
import ButtonCh from "../../modules/ButtonCh"
import Second_Title_ch from '../../modules/Second_TitleCh';
import FormSectionTitle_ch from "../../modules/FormSection_Title_ch"
import MainContents_First_ch from "../../modules/MainContents_First_ch"
import MainContents_Middle_ch from "../../modules/MainContents_Middle_ch"
import MainContents_Important_ch from "../../modules/MainContents_Important_ch"
import FormComponent from "../../modules/formComponent"
import FormFile from "../../modules/FormFile"
import FormConsent_ch from "../../modules/FormConsent_ch"
import IncompleteFormModal_ch from "../../incompleteFormModal_ch";
import SuccessModal_ch from '../../successModal_ch';
import InvalidFileModal_ch from '../../invalidFileModal_ch';
import mainImage from '../../assets/sky4.jpeg';

class SkyV1_ch extends Component {

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
    var userEmailLength=document.getElementById('userEmail').value.length;
    var descriptionLength=document.getElementById('description').value.length;
    var locationLength=document.getElementById('location').value.length;
    var dateLength=document.getElementById('date').value.length;
    var subjectFile=document.getElementById('subjectFile').value.length;

    var result=firstNameLength*userEmailLength*descriptionLength*locationLength*dateLength*subjectFile;

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
      var userEmail=document.getElementById('userEmail').value;
      var description=document.getElementById('description').value;
      var location=document.getElementById('location').value;
      var date=document.getElementById('date').value;

      var testFinal={
        firstName:firstName,
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
    formData.append('userEmail', formInputs['userEmail']);
    formData.append('description', formInputs['description']);
    formData.append('location', formInputs['location']);
    formData.append('date', formInputs['date']);

    const response = await fetch('sky_form_photos-ch.php', {
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
      {/*<ImageSlider className="mainImage" />*/}
      <Container fluid>
        <Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={mainImage}/>
            </Col>
        </Row>

      <ProgramInfo_ch subtitle="裝置藝術" title="天空" artistName="藝術家暨策展人：宋浩芬 " url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/" color="#D9C739">
      </ProgramInfo_ch>

      <MainContents_First_ch contents="在同一片藍天下，當一切顏色歸零(Colour Zero)，回到一個個獨立的個體，人們究竟有何不同?"></MainContents_First_ch>
      <MainContents_Middle_ch contents="無論我們身在方，都是看著同一片天空；無論我們的外表、性格多麼不同，都是被同一片天空包覆其下；無論我們背負何種人生境遇，都是在同一片天空下經歷悲歡離合。天空不問我們的身份性別、社經背景；不辨識我們來自什麼文化，說著哪一種語言，我們同樣都能在同一片天空中，看見炎熱的陽光、溫柔的月亮、靜謐的星空、雨後的彩虹。即便我們身體殘缺、內心傷痛，時而因愛歡喜，時而因恨哀愁，依然與世界上的每一個人一樣，每天迎接日出日落，無法避免風起雨落。天空不曾因為個人的不同而排拒過任何一個人，我們每一個人與其他生命萬物相同，都只是大自然的其中一部分。"></MainContents_Middle_ch>
      <MainContents_Middle_ch contents="當數字「8」轉為橫向成為「∞」無限符號，象徵天空的無邊無際、遼闊遠大。膚色、外貌、族裔、語言、文化，不會是限制人類理解彼此的界線；「∞」也象徵愛的永恆，當人們能互相欣賞不一樣的美麗，平等地認同彼此的存在價值，共同創造了人類永續未來的機會。"></MainContents_Middle_ch>
      <MainContents_Middle_ch contents="在加拿大台灣文化節活動期間，不只在溫哥華美術館前廣場能看到八座「天空」燈光裝置藝術作品，陪伴溫哥華人度過黎明與黑夜。即使你人不在溫哥華，甚至不在加拿大，你都可以隨時拍下【下午三點】的天空照片上傳分享，立即加入我們 ! 在夏天的尾聲，透過看著同一片天空的不同風景，感受不同的空間氛圍，不受地域和時間限制，貼近彼此，相互作伴 !"></MainContents_Middle_ch>

      <Second_Title_ch secondTitle="我跟你的相同，就是我們都不同"></Second_Title_ch>


      <MainContents_Important_ch contents="在地球上不同位置的我們，相約在同一時刻拍下天空的包羅萬象。"></MainContents_Important_ch>
      <MainContents_Important_ch contents="美麗的天空一直包容著我們每一個人的不一樣，無論是缺陷或完美；人類的命運因為疫情改變了，種族之間的歧視日漸嚴重讓人心惶惶；我們抬頭望望藍天，看到希望、感受到空間、見識到渺小，誰貴誰賤?"></MainContents_Important_ch>
      <MainContents_Important_ch contents=" 我們都不一樣，我們也都一樣 !"></MainContents_Important_ch>
      <MainContents_Important_ch contents="我們都不一樣，我們也都一樣 !加拿大台灣文化節邀請您追蹤我們的 Facebook 一起拍攝分享【下午三點】的天空，與世界一起反歧視、追求平等。期待有更多人看到您的天空攝影作品 !"></MainContents_Important_ch>
  <Row className="space"><Col></Col></Row>
    <FormSectionTitle_ch title="攝影師資訊"></FormSectionTitle_ch>

      <Form encType="multipart/form-data">

        <FormComponent formId="firstName" formClassName="inputfield_form" placeHolder="英文姓名"></FormComponent>
        <FormComponent formId="userEmail" formClassName="inputfield_form" placeHolder="電子郵件"></FormComponent>

        <FormSectionTitle_ch title="照片資訊"></FormSectionTitle_ch>



      <Form.Row style={{marginBottom:"30px"}}>

          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <Form.Control id="description" className="inputfield" as ="textArea" type="text" placeholder="照片說明" size="lg"/>
          </Col>
      </Form.Row>

      <FormComponent formId="location" formClassName="inputfield_form" placeHolder="拍攝地點"></FormComponent>
      <FormComponent formId="date" formClassName="inputfield_form" placeHolder="拍攝日期"></FormComponent>

      <FormFile FormId="subjectFile" onChange={this.onChange}></FormFile>

      <FormConsent_ch inputId="checkbox-3" consent="我同意多倫多台灣文化節將我所拍攝的照片作為「天空」節目的內容與相關宣傳使用。"></FormConsent_ch>


        <ButtonCh onclick={this.submitForm} title="送出"></ButtonCh>


      </Form>

      <IncompleteFormModal_ch show={this.state.show2} onClick={()=>this.handleModal2()} />
      <SuccessModal_ch show={this.state.show} onClick={()=>this.handleModal()} />
      <InvalidFileModal_ch show={this.state.showInvalidFile} onClick={()=>this.invalidFile()} />

      </Container>
      <Footer content= "&copy; 2020 多倫多臺灣同鄉會 (TCAT)"/>
    </div>
    );
  }

}

export default SkyV1_ch;
