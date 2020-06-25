import React, {Component} from 'react';
// import ImgSlider from './img_slider';
import ImageSlider from '../../imageSlider';
import ProgramInfo from "../../programInfo";
import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button, Dropdown} from 'react-bootstrap';
import banner from '../../assets/placeholder.png';
import Footer from '../../footer-temp';
import './sky_v1-ch.css'
import fire from '../../firebase/file';

class SkyV1_ch extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      file: null
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  saveToFb() {
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
    let messageRef=fire.database().ref('skyTest').orderByKey().limitToLast(100);
    fire.database().ref('skyTest').push(testFinal);


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
    formData.append('skyPhoto', file);
    formData.append('firstName', formInputs['firstName']);
    formData.append('lastName', formInputs['lastName']);
    formData.append('userEmail', formInputs['userEmail']);
    formData.append('description', formInputs['description']);
    formData.append('location', formInputs['location']);
    formData.append('date', formInputs['date']);
    
    const response = await fetch('sky_form_photos.php', {
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
      {/* <ImgSlider/> */}
      <ImageSlider />
      <Container fluid>

      <Row>
        <Col>
          <img src="" style={{width:"100%", height:"auto"}}/>
        </Col>
      </Row>
      <ProgramInfo subtitle="大型實體裝置藝術" title="天空" artistName="藝術家暨策展人：宋浩芬 " url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/" color="#D9C739">
      </ProgramInfo>
      
      <Row className="mainContents" style={{marginTop:"100px"}}>
          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
            <p className="contentsInParagraph">
              在同一片藍天下，當一切顏色歸零(Colour Zero)，回到一個個獨立的個體，人們究竟有何不同?
            </p>
            <p className="contentsInParagraph">
              無論我們身在方，都是看著同一片天空；無論我們的外表、性格多麼不同，都是被同一片天空包覆其下；無論我們背負何種人生境遇，都是在同一片天空下經歷悲歡離合。天空不問我們的身份性別、社經背景；不辨識我們來自什麼文化，說著哪一種語言，我們同樣都能在同一片天空中，看見炎熱的陽光、溫柔的月亮、靜謐的星空、雨後的彩虹。即便我們身體殘缺、內心傷痛，時而因愛歡喜，時而因恨哀愁，依然與世界上的每一個人一樣，每天迎接日出日落，無法避免風起雨落。天空不曾因為個人的不同而排拒過任何一個人，我們每一個人與其他生命萬物相同，都只是大自然的其中一部分。
            </p>
            <p className="contentsInParagraph">
              當數字「8」轉為橫向成為「∞」無限符號，象徵天空的無邊無際、遼闊遠大。膚色、外貌、族裔、語言、文化，不會是限制人類理解彼此的界線；「∞」也象徵愛的永恆，當人們能互相欣賞不一樣的美麗，平等地認同彼此的存在價值，共同創造了人類永續未來的機會。
            </p>
            <p className="contentsInParagraph">
              在加拿大台灣文化節活動期間，不只在溫哥華美術館前廣場能看到八座「天空」燈光裝置藝術作品，陪伴溫哥華人度過黎明與黑夜。即使你人不在溫哥華，甚至不在加拿大，你都可以隨時拍下【下午三點】的天空照片上傳分享，立即加入我們 ! 在夏天的尾聲，透過看著同一片天空的不同風景，感受不同的空間氛圍，不受地域和時間限制，貼近彼此，相互作伴 !
            </p>
          </Col>
      </Row>
      <Row>
        <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}><p className ="second_title">我跟你的相同，就是我們都不同 </p></Col>
      </Row>
      <Row>
        <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
          <p className="project_content">
          在地球上不同位置的我們，相約在同一時刻拍下天空的包羅萬象。
          </p>
          <p className="project_content">
          美麗的天空一直包容著我們每一個人的不一樣，無論是缺陷或完美；人類的命運因為疫情改變了，種族之間的歧視日漸嚴重讓人心惶惶；我們抬頭望望藍天，看到希望、感受到空間、見識到渺小，誰貴誰賤?
          </p>
          <p className="project_content">
          我們都不一樣，我們也都一樣 !
          </p>
          <p className="project_content">
          我們都不一樣，我們也都一樣 !加拿大台灣文化節邀請您追蹤我們的 Facebook 一起拍攝分享【下午三點】的天空，與世界一起反歧視、追求平等。期待有更多人看到您的天空攝影作品 !
          </p>
        </Col>
      </Row>

      <Row>
        <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} bsCustomPrefix="hed" className='hed' style={{backgroundColor: "#D9C739", marginBottom:"2%", paddingTop:"0.5%",paddingBottom:"0.5%", fontWeight:"bold", fontSize:"40px"}}>Photographer</Col>
      </Row>

      <Form encType="multipart/form-data">
        <Form.Row style={{marginBottom:"30px"}}>

            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <Form.Control id="firstName" type="text" placeholder="First Name" required size="lg"/>
            </Col>

        </Form.Row>
        <Form.Row style={{marginBottom:"30px"}}>

            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <Form.Control id="lastName" type="text" placeholder="Last Name" required size="lg"/>
            </Col>
        </Form.Row>
        <Form.Row style={{marginBottom:"30px"}}>
            
            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
              <Form.Control id="userEmail" type="text" placeholder="Email" required size="lg"/>
            </Col>
        </Form.Row>


      <Row>
        <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} bsCustomPrefix="hed" className='hed' style={{backgroundColor: "#D9C739", marginTop:"2%", marginBottom:"2%", paddingTop:"0.5%",paddingBottom:"0.5%", fontWeight:"bold", }}>Photo Info</Col>
      </Row>

      <Form.Row style={{marginBottom:"30px"}}>

          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <Form.Control id="description" as ="textArea" type="text" placeholder="Description" size="lg"/>
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
              <Form.File.Input required  onChange={this.onChange}  bsPrefix='form-file-input' name="skyPhoto" />
              {/*}<Form.File id="custom-file" label="" custom required/>*/}
              {/* <Form.Control.Feedback type="invalid" value={{ff}}  ref={f => {ff = f}}>
                File must be .jpg or .png and under 1MB
              </Form.Control.Feedback> */}
              <Form.Text id="passwordHelpBlock" muted>.jpeg or .png file</Form.Text>
            </Col>
        </Form.Row>
        <Form.Row style={{marginBottom:"30px"}}>
          <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
            <Form.Check aria-label="option 1"/>
            <input type="checkbox" class="custom-control-input" id="checkbox-3" checked="" ></input>
          </Col>
          <Col xl={{span:7, offset:0}} lg={{span:9, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
            <div className="formConsent" style={{color:"#BE0027"}} >
            我同意多倫多台灣文化節將我所拍攝的照片作為「天空」節目的內容與相關宣傳使用。
            </div>
          </Col>

        </Form.Row>
        <Form.Row style={{marginBottom:"50px"}}>
            <Button onClick={this.submitForm} bsPrefix="submit_button" className="btn" variant="primary" type="submit">Submit</Button>
        </Form.Row>
        <Form.Row style={{marginBottom:"50px"}}>
          <Button  variant="primary" bsPrefix="share_button" >SHARE WITH FRIENDS</Button>
        </Form.Row>
      </Form>
      </Container>
      <Footer/>
    </div>
    );
  }
  
}

export default SkyV1_ch;



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