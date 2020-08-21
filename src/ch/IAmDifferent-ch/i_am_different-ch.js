import React, {useEffect} from "react";
import CardGame_ch from "./cardGame-ch";
import styled from "@emotion/styled";
import different_img from "../../assets/Different.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProgramInfo_ch from "../programInfo-ch";
import "./i_am_different-ch.css";
import { Link } from "react-router-dom";
import FooterCH from "../footer-ch";
import ButtonCh from "../../modules/ButtonCh"
import Second_Title_ch_bold from '../../modules/Second_TitleCh_Bold';
import MainContents_Important_ch from "../../modules/MainContents_Important_ch";
import MainContents_Middle_ch from "../../modules/MainContents_Middle_ch";
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import Second_Title_ch from '../../modules/Second_TitleCh';
import MainContents_Important_With_Border_two_bolder_ch from "../../modules/MainContents_Important_with_border_two_bold_ch"
import $ from "jquery";

function IAmDifferent() {
  const diffForm = <Link to="IAmDifferent"></Link>;


  const goToForm=()=> {
      window.location='/IAmDifferentForm-ch';
  };

  let Body = styled.div`
    text-align: center;
  `;
  let GameDiv = styled.div`
    width: 100%;
    // min-height: 250px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
  `;

  var text=`若世界以專業領域、社會貢獻的成就來對待每一個人，給予每個人付出後應得的尊重；人們不再以膚色外表、出身背景評斷、喜惡他人，是否才能真正地將每個人當作獨立的個人看待?

我們希望從台灣文化節發起 "I’m different, just like you." (我跟你的相同，就是我們都不同) 運動，蒐集與展示醫護人員、警消人員、科學家、衛生官員的照片，不僅向抗疫英雄致敬，也邀請大家一起參與、呼籲欣賞每個人與眾不同的美，為我們信仰人生而平等的理念喝采。「不同」代表著我們都是獨立的個體；「相同」意謂我們擁有共通的情感，肯定生而為人的人性價值。為我們的不同感到驕傲，為我們的相同愛惜彼此 !

上傳照片的民眾，不僅可能在台灣文化節網站看到自己、親友或世界各地相同職業人士的照片，還能在我們的網站上進行影像互動體驗，一起邀更多朋友響應 "I’m different, just like you."

8/28起，上傳照片的朋友，可以在網站上，看到自己分享的照片，以及體驗影像互動遊戲!`

var instruction1 = `此互動作品是由這次疫情中保護我們的前線作業人員一起完成的互動遊戲，讓我們好好的認識他們！遊戲的問題在左上方，請滑鼠點擊圖片並找出職業相同的前線人員們。
`
let occupation_list=["Doctor","Paramedic","Nurse","Pharmacist","Therapist","Healthcare Technician", "Firefighter", "Police", "Social Service Worker"]
let actual_data_test=["1TesttestetestetasetTherapistaaaa","2ginacoquitlamkim@gmail.comgkTherapistasian",
"3TesttestetestetasetNurseaaaa","4192jasonVancouverjasonwei0224@gmail.comtestTherapisttesttest.jpg",
"5TesttestetestetasetDoctorasdf","6ginacoquitlamkim@gmail.comgkNurseasian",
"7284JasonTEsttesttestDoctortesttest.jpg","8JasonVancouverjasonwei0224@gmail.comJasonPoliceTaiwaneseVancouver",
"9JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver",
"10TesttestetestetasetDoctoraaaa","11192jasonVancouverjasonwei0224@gmail.comtestDoctortesttest",
"12TesttestetestetasetDoctoraaaa", "13TesttestetestetasetDoctoraaaaa", "14TesttestetestetasetDoctoraaaa",
"15TesttestetestetasetDoctoraaaa","16ginacoquitlamkim@gmail.comgkTherapistasian",
"17TesttestetestetasetDoctoraaaa","18192jasonVancouverjasonwei0224@gmail.comtestDoctortesttest.jpg",
"19TesttestetestetasetPoliceasdf","20ginacoquitlamkim@gmail.comgkDoctorasian","21JasonTEsttesttestDoctortesttest.jpg",
"22JasonVancouverjasonwei0224@gmail.comJasonPoliceTaiwaneseVancouver",
"23JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver",
"24TesttestetestetasetPoliceaaaa","25192jasonVancouverjasonwei0224@gmail.comtestPolicetesttest",
 "26TesttestetestetasetDoctoraaaa","27ginacoquitlamkim@gmail.comgkDoctorasian","28TesttestetestetasetDoctoraaaa",
 "29192jasonVancouverjasonwei0224@gmail.comtestPolicetesttest.jpg","30TesttestetestetasetDoctorasdf",
 "31ginacoquitlamkim@gmail.comgkDoctorasian","32284JasonTEsttesttestDoctortesttest.jpg",
"33JasonVancouverjasonwei0224@gmail.comJasonPoliceTaiwaneseVancouver",
"34JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver",
"35TesttestetestetasetDoctoraaaa","192jasonVancouverjasonwei0224@gmail.comtestPolicetesttet"]

let photo_count_dic= {
  "Therapist":0,
  "Social Service Worker":0,
  "Police":0,
  "Pharmacist":0,
  "Nurse":0,
  "Paramedic":0,
  "Healthcare Technician":0,
  "Firefighter":0,
  "Doctor":0
}

// console.log(actual_data_test.length)
let autual_data_test2=[];

function checktype(file_name) {
  if(file_name.search('Therapist')>=0) {
    return "Therapist";
  }else if(file_name.search("Other")>=0) {
    return "Other"
  }else if(file_name.search("Social_Service_Worker")>=0) {
    return "Social Service Worker"
  }else if(file_name.search("Police")>=0) {
    return "Police"
  }else if(file_name.search("Pharmacist")>=0) {
    return "Pharmacist"
  }else if(file_name.search("Nurse")>=0) {
    return "Nurse"
  }else if(file_name.search("Paramedic")>=0) {
    return "Paramedic"
  }else if(file_name.search("Healthcare_Technician")>=0) {
    return "Healthcare Technician"
  }else if(file_name.search("Firefighter")>=0) {
    return "Firefighter"
  }else if(file_name.search("Doctor")>=0) {
    return "Doctor"
  }else {
    return -1;
  }
};

useEffect(()=> {
  // console.log(test_array.length+"should be 6");
  // console.log(occupation_list.length+"should be 6");
  // var list_job=['1', '2', '3', '4', '5', '6', 7, 8,9];
  // var actual_data2=occupation_list;
  // var actual_data_test2 = actual_data_test;
  // console.log(actual_data_test2.length+"should be 6");
const deck = document.querySelector(".deck");
var target=null;




function startGame(){

  console.log("Start game");
    $('span.target').text("Please look for other "+ target_occupation + "(s)");

  // console.log("actual test data from server " + actual_data_test[0]);
  // console.log("The type of " + typeof(actual_data_test));
  // var ready_list=test_array;
  // var actual_data_test3=actual_data_test;


  // console.log(ready_list);
  // console.log(actual_data_test3);

  for (var i= 0; i < actual_data_test.length; i++){
    // console.log("first"+actual_data_test3[i]);
      var tempoDiv=document.createElement('div');
      var tempString=actual_data_test[i] //.slice(0,-4);
      tempoDiv.classList.add('card_outside')
      tempoDiv.setAttribute("id", "wrapper_"+tempString);
      tempoDiv.setAttribute("type", tempString);

      deck.appendChild(tempoDiv);
      var tempoDivInside=document.createElement('div');
      tempoDivInside.classList.add('card_inside')
      // var stringtest=test_array[i];
      tempoDivInside.setAttribute("id", "inside_"+tempString);
      console.log(tempString);
      tempoDivInside.style.backgroundImage = `url(${tempString})`
      tempoDivInside.style.backgroundSize = "contain";
      tempoDivInside.style.backgroundRepeat="no-repeat";
      tempoDivInside.style.backgroundPosition="center";

      // if(tempString=="doctor"){
      //   tempoDivInside.style.backgroundImage=`url(${teacher})`
      // }else if(tempString=="instructor") {
      //   tempoDivInside.style.backgroundImage=`url(${instructor})`
      // }else if(tempString=="master") {
      //   tempoDivInside.style.backgroundImage=`url(${master})`
      // }else if(tempString=="police") {
      //   tempoDivInside.style.backgroundImage=`url(${police})`
      // }else if(tempString=="nurse") {
      //   tempoDivInside.style.backgroundImage=`url(${nurse})`
      // }else {
      //   tempoDivInside.style.backgroundImage=`url(${programmer})`
      // }
      tempoDiv.appendChild(tempoDivInside);
     tempoDivInside.style.visibility='hidden';


      tempoDiv.addEventListener("click", function a() {
        // console.log(this);
        console.log("File Name: " +this.getAttribute('type'));
        document.getElementById('inside_'+this.getAttribute('type')).style.visibility='visible';
        var split_list = this.getAttribute('type').split("-");
        // console.log(split_list);
        // var name = split_list[1].replace(")", " ");
        var name = split_list[1].replace("_", " ");
        var ethnicity = split_list[3].replace("_", " ");
        // ethnicity = ethnicity.replace("_", " ");
        var city = split_list[4].replace(".jpg", " ");
        $('span.info').text("Thank you, " + name +" a " + ethnicity + " in " + city);
        // $('span.info').text(this.getAttribute('type'));
        target=this.getAttribute('type');
        console.log("target_occupation: (in EL) " + target_occupation);
        // console.log("target: (in EL) " +target);
        var photo_occupation= checktype(target);
        console.log("photo_occupation: (in EL) " +photo_occupation);
        if(photo_occupation==target_occupation) { // problem with the target need a solution
          // console.log("correct");

          document.getElementById('inside_'+this.getAttribute('type')).style.border="#00FF00 solid 10px";
          // autual_data_test2.splice(autual_data_test2.indexOf(target_occupation));

          photo_count_dic[target_occupation] = photo_count_dic[target_occupation] -1;
          console.log(photo_count_dic)
          document.getElementById('wrapper_'+this.getAttribute('type')).removeEventListener("click", a);
          if(photo_count_dic[target_occupation]==0){
            console.log("game complete");
              setTimeout(function() {
            document.getElementById("card-deck").style.visibility="hidden";
            document.getElementById("card-deck").style.display="none"
            document.getElementById("diff_top_row").style.display="none";
            document.getElementById("diff_bottom_row").style.display="none";
            var audio=new Audio('./猜對音效.mp3');
            audio.play()
          },3000);
          document.getElementById("main_image_diff").style.display="block";
          }

          // if(autual_data_test2.length>0) {
          //   // target_occupation=pick_job();
          //   console.log(autual_data_test2)
          //   let index_of = autual_data_test2.indexOf(this.getAttribute('type'))
          //   autual_data_test2.splice(index_of)
          //   console.log(autual_data_test2)
          // }else {
          //   console.log('done');
          // }

        }else {
          // console.log("not correct");
          var incorrect_card='inside_'+target;
          // console.log(target2);
          document.getElementById('inside_'+this.getAttribute('type')).style.border="red solid 10px";
          // document.getElementById('inside_'+this.getAttribute('type')).innerHTML.style.color = "red";
          // document.getElementById('inside_'+this.getAttribute('type')).innerHTML.style.fontSize = "20px";
          // document.getElementById('inside_'+this.getAttribute('type')).innerHTML = "X";

          setTimeout(function() {
            document.getElementById(incorrect_card).style.visibility="hidden"
          },1000)
        }
      })
  }

  // var target_occupation=pick_job();
  // while(ready_list.length>0) {

  //   console.log(target_occupation);
  //   console.log(id_of_thing);
  //   match_check(target_occupation, id_of_thing);
  //   if(match_check==="correct") {
  //     ready_list.splice(ready_list.indexOf(target_occupation), 1);
  //   }else {
  //     target_occupation=pick_job();
  //   }
  //   console.log(ready_list);
  // }
}
var pick_job = function (){

  var random_number=Math.floor(Math.random()*occupation_list.length);
  console.log("what is randomNumber"+random_number)
  return occupation_list[random_number] //.slice(0,-4);
};


  var target_occupation=pick_job();
  console.log(target_occupation);
  console.log("before start game");
  async function getFileName(e){
      let fileList = await fetch('IAmDiffGame.php')
      // console.log(fileList.text)
      let data = await fileList.json()
      // console.log(data)
      // console.log("the type of " + typeof(data))

      actual_data_test = Object.values(data);
      for(i =0; i< actual_data_test.length; i++){
        actual_data_test[i] = "http://gallery.taiwanfest.ca/subjectPhotos/"+actual_data_test[i];
      }
      for(var i=0;i<actual_data_test.length;i++) {
        // console.log("1 "+i +" "+ actual_data_test[i])
        var occupation=checktype(actual_data_test[i]);
        photo_count_dic[occupation] = photo_count_dic[occupation] + 1;
        // if(occupation == target_occupation){
        //   autual_data_test2.push(actual_data_test[i]);
        // }
        // console.log("2 "+i +" "+a);

      }
      console.log("Actual Data: " + autual_data_test2)
      startGame();
  };
  getFileName();

}, [])
  return (
    <div>
      <Container fluid>
        {/*}<Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={different_img}/>
            </Col>
        </Row>*/}
        <div style={{backgroundColor:"black"}}>
        <Row className="diff_top_row" id="diff_top_row">
          <Col lg={{ span: 6, offset: 0 }}>
          <div style={{textAlign:"center", margin:"auto"}}><span className = "target" ></span></div>
        </Col>
        <Col lg={{ span: 6, offset: 0 }}>
          <div style={{textAlign:"center", margin:"auto"}}><span className = "info" ></span></div>
        </Col>
        </Row>

        <Row style={{backgroundColor: "black"}}>
          <Col
            lg={{ span: 12, offset: 0 }}
            xs={{ span: 12, offset: 0 }}
            bsPrefix="image_col"
          >
            <img className="main_image" id="main_image_diff" style={{display: "none"}} src={different_img} />
          </Col>
          <Col
            lg={{ span: 12, offset: 0 }}
            xs={{ span: 12, offset: 0 }}
            bsPrefix="image_col"
          >
            <div class="deck" id="card-deck"></div>
            </Col>
        </Row>
        <Row className="diff_bottom_row" id ="diff_bottom_row">
          <Col>
          <div style={{textAlign:"center", margin:"auto"}}><span className = "target" ></span></div>
        </Col>
        <Col>
          <div style={{textAlign:"center", margin:"auto"}}><span className = "info" ></span></div>
        </Col>
        </Row>
      </div>
        <ProgramInfo_ch
          subtitle="我跟你的相同，就是我們都不同 "
          title="共同面對的我們"
          artistName="台灣文化節"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FIAmDifferent-ch&amp;src=sdkpreparse"
          color="#D9C739"
        ></ProgramInfo_ch>
        <Second_Title_ch secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title_ch>
          <MainContents_Important_With_Border_two_bolder_ch  style={{color:"#0C3866"}} bold="桌機: " contents={instruction1}
          bold2="手機 / 平板: " contents2="互動作品必須使用桌機電腦觀看，手機與平板介面請點擊左右兩邊的圓點觀看照片。"></MainContents_Important_With_Border_two_bolder_ch>

        <Second_Title_ch_bold secondTitle="影像創作 X 線上互動"></Second_Title_ch_bold>

        <MainContents_Important_ch contents="在疫情最辛苦艱難的時期，許多生命受苦臨危之際，醫護人員、警消人員、科學家、衛生官員這些專業人士，在拯救生命的同時，並不會過問危難者的族裔與身份。我們每一個人都會面臨生命終結的一天，當這些專業人士在救助受苦的人們，處理危急的情況當下，並不會過問對方的膚色族裔、語言文化、社經地位，那時，他們的眼中視一切生命皆為平等，不因求助者的外在條件、理想價值而有所不同。"></MainContents_Important_ch>
        <Row className="space_ch_imd"><Col></Col></Row>
        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}></MainContents_Middle_Adonis>
        {/*}<MainContents_Middle_ch contents="若世界以專業領域、社會貢獻的成就來對待每一個人，給予每個人付出後應得的尊重；人們不再以膚色外表、出身背景評斷、喜惡他人，是否才能真正地將每個人當作獨立的個人看待?"></MainContents_Middle_ch>
        <MainContents_Middle_ch contents='我們希望從台灣文化節發起 "I’m different, just like you." (我跟你的相同，就是我們都不同) 運動，蒐集與展示醫護人員、警消人員、科學家、衛生官員的照片，不僅向抗疫英雄致敬，也邀請大家一起參與、呼籲欣賞每個人與眾不同的美，為我們信仰人生而平等的理念喝采。「不同」代表著我們都是獨立的個體；「相同」意謂我們擁有共通的情感，肯定生而為人的人性價值。為我們的不同感到驕傲，為我們的相同愛惜彼此 !'></MainContents_Middle_ch>
        <MainContents_Middle_ch contents='上傳照片的民眾，不僅可能在台灣文化節網站看到自己、親友或世界各地相同職業人士的照片，還能在我們的網站上進行影像互動體驗，一起邀更多朋友響應 "I’m different, just like you."'></MainContents_Middle_ch>
        <MainContents_Middle_ch contents='8/28起，上傳照片的朋友，可以在網站上，看到自己分享的照片，以及體驗影像互動遊戲!'></MainContents_Middle_ch>*/}

        <ButtonCh onclick={goToForm} title="上傳照片" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FIAmDifferent-ch&amp;src=sdkpreparse"></ButtonCh>

      </Container>
      <div
        lg={{ span: 3, offset: 3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
          alignItems: "center",
        }}
      >
      </div>

      <FooterCH/>
    </div>
  );
}

export default IAmDifferent;
