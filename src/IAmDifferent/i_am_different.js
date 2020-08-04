import React, {useEffect} from "react";
import CardGame from "./cardGame";
import styled from "@emotion/styled";
import instructor from "../assets/instructor.jpg";
import master from "../assets/master.jpg";
import teacher from "../assets/teacher.jpg";
import nurse from "../assets/nurse.jpg";
import police from "../assets/police.jpg";
import programmer from "../assets/programmer.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProgramInfo from "../programInfo";
import "./i_am_different.css";
import $ from "jquery";
import Header from "../dummy/header";
import { Link } from "react-router-dom";
import NewsletterContactUs from "../newContactForm/newsletterContactUs";
import Footer from "../footer-temp";
import Button2 from "../modules/Button2";
import Second_Title_Bold from "../modules/Second_Title_Bold";
import MainContents_Middle from "../modules/MainContents_Middle";
import MainContents_Important from "../modules/MainContents_Important";
import MainContents_WithBold_Impt from "../modules/MainContents_WithBold_Impt";
import MainContents_With_Bold from "../modules/MainContents_WithBold";
import { Helmet } from "react-helmet";
import different_img from "../assets/Different.jpg";



function IAmDifferent() {
  const diffForm = <Link to="IAmDifferent"></Link>;

  let Body = styled.div`
    text-align: center;
  `;
  let GameDiv = styled.div`
    width: 100%;
    min-height: 250px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
  `;

  const goToForm = () => {
    window.location = "/IAmDifferentForm";
  };



  // let test_array=[0,1,2,3,4,5]
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
              document.getElementById("main_image_diff").style.display="block";
            },2000);
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
        <Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={different_img}/>
            </Col>
        </Row>
        {/*<div style={{backgroundColor:"black"}}>
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
      </div>*/}
        <ProgramInfo
          subtitle="I'm different, just like you"
          title="WE ARE ALL IN THIS TOGETHER"
          artistName="TAIWANfest"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FIAmDifferent&amp;src=sdkpreparse"
          color="#D9C739"
        ></ProgramInfo>

        <Second_Title_Bold
          secondTitle="About This Work:"
          style={{ fontFamily: "sofia-pro Sans-serif" }}
        ></Second_Title_Bold>

        <MainContents_WithBold_Impt
          contents=""
          bold="“I’m different, just like you! - We are all in this together” "
          contents2="is an interactive exhibition piece that grows as people continue to contribute to it.
              Through these most recent difficult times, we have all come to rely on the skills and hard work of the front-line workers who have all come from different backgrounds to serve their communities.
              This piece serves to highlight these essential workers and deliver the message that though we may look different and share varied values, We are all in this together."
        ></MainContents_WithBold_Impt>

        <MainContents_With_Bold
          contents="Racism has no place in the fight against any pandemic and the consequence of racially motivated actions is perhaps more deadly than the virus because it is human against human.
               The COVID-19 pandemic has proved that the virus sees no boundaries and the potential cure can also come from anywhere to save lives for all.
               Despite coming from a range of backgrounds and looking different, these professionals all do their jobs to work on the problems our world is facing, embodying the message"
          bold=" “I’m different, just like you!” "
          contents2="Everyone should be proud of their differences and the only certainty for the world is that everyone is different regardless of birthplaces, lifestyles, skin colours or languages spoken."
        ></MainContents_With_Bold>

        <Button2
          onclick={goToForm}
          title="UPLOAD FRONT-LINE HERO PHOTO"
          togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FIAmDifferent&amp;src=sdkpreparse"
        ></Button2>
      </Container>
      <div
        lg={{ span: 3, offset: 3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
          alignItems: "center",
        }}
      ></div>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        {/*<NewsletterContactUs></NewsletterContactUs>*/}
      </Row>
    <Footer content="&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default IAmDifferent;
