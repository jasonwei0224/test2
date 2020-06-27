import React, {Component} from 'react';
import {Container, Row, Col, Form, Button, Modal, Dropdown} from 'react-bootstrap';
import ProgramInfo_ch from "../programInfo-ch"
import different_img from "../../assets/Different.jpg";
// import './people_and_mask.css'
import '../../sky_v1.css';
import './IAmDifferentForm-ch.css'
import Footer from '../../footer-temp';
import fire from '../../firebase/file';


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
    var subjectFile=document.getElementById('subjectFile').value;
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
        subjectCity:subjectCity
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
            <Col lg={{span:12, offset:0}} xs={{span:12, offset:0}}>
              <img src={different_img} style={{width:"100%", height: "auto"}}/>
            </Col>
          </Row>

          <ProgramInfo_ch subtitle="我跟你的相同，就是我們都不同" title="共同面對的我們" artistName="台灣文化節" url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/" color="#0C3866"></ProgramInfo_ch>
          <Row className="mainContents" style={{marginTop:"100px"}}>
            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}className="mainContent">
              <p className="contentsInParagraph"> 本計畫蒐集醫護人員、警消人員、科學家、衛生官員等防疫幕後英雄的照片，我們邀請您無論身在何處，若您自己或您的家人、朋友是醫護人員、警消人員、科學家、衛生官員等專業人士，請您不吝惜地分享給我們上述職業人士的照片，與我們一起參與向世界各地的抗疫英雄致敬活動。
              </p> <br />
            </Col>
          </Row>

          <Row>
           <Col  xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}
             style = {{backgroundColor: "#D9C739", marginBottom:"2%", paddingTop:"0.5%", paddingBottom:"0.5%",fontWeight:"bold"}} className="formSectionTitle">照片資訊</Col>
          </Row>

          <Form encType="multipart/form-data">
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'inputfield' className=  'inputfield' type="text"  id="senderFullName" placeholder="上傳者 英文姓名" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'inputfield' className=  'inputfield'type="text"  id="senderCity" placeholder="城市/ 國家" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'inputfield' className=  'inputfield'type="email" id="senderEmail" placeholder="電子郵件" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'inputfield'className=  'inputfield' type="text"  id="subjectFirstName" placeholder="主角 英文名子" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                  <Form.Control bsCustomPrefix = 'inputfield' className=  'inputfield' id="subjectOccupation" as="select" >
                    <option>醫生</option>
                    <option>消防員</option>
                    <option>醫療技術人員</option>
                    <option>護士</option>
                    <option>醫護人員</option>
                    <option>藥劑師</option>
                    <option>警察</option>
                    <option>社工</option>
                    <option>治療師</option>
                  </Form.Control>

                </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'inputfield' className=  'inputfield'type="text" id="subjectEthnicity" placeholder="族裔 (英文)" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control bsCustomPrefix = 'inputfield' className=  'inputfield'type="text" id="subjectCity" placeholder="城市/國家" required size="lg" />
              </Col>
            </Form.Row>
            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <Form.File.Input onChange={this.onChange} id="subjectFile" required bsPrefix='form-file-input' name="subjectPhoto"/>
            <p id="hint" >File must be .jpg or .png and under 1MB</p>
              </Col>
            </Form.Row>

            <Form.Row style={{marginBottom:"30px"}}>
              <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
                <Form.Check aria-label="option 1"/>
                <input type="checkbox" class="custom-control-input" id="checkbox-3"></input>
              </Col>

              <Col xl={{span:9, offset:0}} lg={{span:10, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
                <div className="formConsent">"我同意多倫多台灣文化節將我上傳的照片作為「我和你相同，就是我們都不同」節目的 內容與相關宣傳使用。"</div>
              </Col>
            </Form.Row>

            <Form.Row style={{marginTop:"50px"}}>
                <Button onClick={this.submitForm} variant="primary" type="submit" bsPrefix="submitButton-ch">送出</Button>
            </Form.Row>
            <Form.Row style={{marginBottom:"50px"}}>
              <Button bsPrefix="mobileSharebutton-ch" variant="primary" type="submit">分享給朋友</Button>
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
    <Footer content= "&copy; 2020 多倫多臺灣同鄉會 (TCAT)"/>
  </div>
    );
  }
};

export default IAmDifferentForm;
