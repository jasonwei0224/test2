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
import Second_Title from "../modules/Second_Title";
import MainContents_Middle from "../modules/MainContents_Middle";
import MainContents_Important from "../modules/MainContents_Important";
import MainContents_WithBold_Impt from "../modules/MainContents_WithBold_Impt";
import MainContents_With_Bold from "../modules/MainContents_WithBold";
import { Helmet } from "react-helmet";

function IAmDifferent() {
  const diffForm = <Link to="IAmDifferent"></Link>;

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
  const goToForm = () => {
    window.location = "/IAmDifferentForm";
  };


  
  let test_array=[0,1,2,3,4,5]
  let actual_data=["teacher.jpg","nurse.jpg","instructor.jpg","master.jpg","police.jpg","programmer.jpg"]

  let actual_data_test=["TesttestetestetasetDoctor","ginacoquitlamkim@gmail.comgkDoctorasian","TesttestetestetasetDoctor","192jasonVancouverjasonwei0224@gmail.comtestDoctortesttest.jpg","TesttestetestetasetDoctorasdf","ginacoquitlamkim@gmail.comgkDoctorasian","284JasonTEsttesttestDoctortesttest.jpg","JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver","JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver","TesttestetestetasetDoctor","192jasonVancouverjasonwei0224@gmail.comtestDoctortesttest", "TesttestetestetasetDoctor","ginacoquitlamkim@gmail.comgkDoctorasian","TesttestetestetasetDoctor","192jasonVancouverjasonwei0224@gmail.comtestDoctortesttest.jpg","TesttestetestetasetDoctorasdf","ginacoquitlamkim@gmail.comgkDoctorasian","284JasonTEsttesttestDoctortesttest.jpg","JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver","JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver","TesttestetestetasetDoctor","192jasonVancouverjasonwei0224@gmail.comtestDoctortesttest", "TesttestetestetasetDoctor","ginacoquitlamkim@gmail.comgkDoctorasian","TesttestetestetasetDoctor","192jasonVancouverjasonwei0224@gmail.comtestDoctortesttest.jpg","TesttestetestetasetDoctorasdf","ginacoquitlamkim@gmail.comgkDoctorasian","284JasonTEsttesttestDoctortesttest.jpg","JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver","JasonVancouverjasonwei0224@gmail.comJasonDoctorTaiwaneseVancouver","TesttestetestetasetDoctor","192jasonVancouverjasonwei0224@gmail.comtestDoctortesttest"]
  let autual_data_test2=[];
  for(var i=0;i<actual_data_test.length;i++) {
    console.log("1 "+actual_data_test[i])
    var a=checktype(actual_data_test[i]);
    console.log("2 "+a);
    autual_data_test2.push(a);
  }
  function checktype(a) {
    if(a.search('Therapist')>=0) {
      return "Therapist.jpg";
    }else if(a.search("Other")>=0) {
      return "Other.jpg"
    }else if(a.search("Social Service Worker")>=0) {
      return "Social Service Worker.jpg"
    }else if(a.search("Police")>=0) {
      return "Police.jpg"
    }else if(a.search("Pharmacist")>=0) {
      return "Pharmacist.jpg"
    }else if(a.search("Nurse")>=0) {
      return "Nurse.jpg"
    }else if(a.search("Paramedic")>=0) {
      return "Paramedic.jpg"
    }else if(a.search("Healthcare Technician")>=0) {
      return "Healthcare Technician.jpg"
    }else if(a.search("Firefighter")>=0) {
      return "Firefighter.jpg"
    }else if(a.search("Doctor")>=0) {
      return "Doctor.jpg"
    }else {
      return -1;
    }
  };
  console.log("Please asdfasdfasdf "+autual_data_test2);




  console.log("important very very"+actual_data_test.length);
  useEffect(()=> {
    console.log(test_array.length+"should be 6");
    console.log(actual_data.length+"should be 6");
    var list_job=['1', '2', '3', '4', '5', '6'];
    var actual_data2=actual_data;
    console.log(actual_data2.length+"should be 6");
  const deck = document.querySelector(".deck");
  var target=null;
  function startGame(){
    console.log("Start game");
    var ready_list=test_array;
    var actual_data3=actual_data2;

    
    console.log(ready_list);
    console.log(actual_data3);
    
    for (var i= 0; i < actual_data3.length; i++){
      console.log("first"+actual_data3[i]);
        var tempoDiv=document.createElement('div');
        var tempString=actual_data3[i].slice(0,-4);
        tempoDiv.classList.add('test123')
        tempoDiv.setAttribute("id", "wrapper_"+tempString);
        tempoDiv.setAttribute("type", tempString);
        
        deck.appendChild(tempoDiv);
        var tempoDivInside=document.createElement('div');
        tempoDivInside.classList.add('test123Inside')
        // var stringtest=test_array[i];
        tempoDivInside.setAttribute("id", "inside_"+tempString);
        console.log(tempString);
        if(tempString=="teacher"){
          tempoDivInside.style.backgroundImage=`url(${teacher})`
        }else if(tempString=="instructor") {
          tempoDivInside.style.backgroundImage=`url(${instructor})`
        }else if(tempString=="master") {
          tempoDivInside.style.backgroundImage=`url(${master})`
        }else if(tempString=="police") {
          tempoDivInside.style.backgroundImage=`url(${police})`
        }else if(tempString=="nurse") {
          tempoDivInside.style.backgroundImage=`url(${nurse})`
        }else {
          tempoDivInside.style.backgroundImage=`url(${programmer})`
        }
        tempoDiv.appendChild(tempoDivInside);
        tempoDivInside.style.visibility='hidden';
        
      
        tempoDiv.addEventListener("click", function() {     
          console.log(this);
          console.log(this.getAttribute('type'));
          document.getElementById('inside_'+this.getAttribute('type')).style.visibility='visible';
          target=this.getAttribute('type');
          console.log(num+"num this is inside eventlistener");
          console.log(target+"target this is inside eventlistener");
          
          if(num==target) {
            console.log("correct");
            
            actual_data.splice(actual_data.indexOf(num));
            if(actual_data.length>0) {
              num=pick_job();
              console.log(actual_data)
            }else {
              console.log('done');
            }

          }else {
            console.log("not correct");
            var target2='inside_'+target;
            console.log(target2);
            setTimeout(function() {
              document.getElementById(target2).style.visibility="hidden"
            },1000)
            
            
          }

        })
    }

    // var num=pick_job();
    // while(ready_list.length>0) {
        
    //   console.log(num);
    //   console.log(id_of_thing);
    //   match_check(num, id_of_thing);
    //   if(match_check==="correct") {
    //     ready_list.splice(ready_list.indexOf(num), 1);
    //   }else {
    //     num=pick_job();
    //   }
    //   console.log(ready_list);
    // }
  }
  var pick_job = function (){

    var random_number=Math.floor(Math.random()*actual_data.length);
    console.log("what is randomNumber"+random_number)
    return actual_data[random_number].slice(0,-4);
  };

 
    var num=pick_job();
    console.log(num); 
    console.log("before start game");
    startGame();
    
    // if() {
    //   stop
    // }

    // while(list_job.length>0) {
    //   var number=pick_job;
    //   console.log(number);
    //   console.log(target);
    // }
  }, [])
  return (
    
    <div>
      <Container fluid>
        <Row>
          {/* <Col
            lg={{ span: 12, offset: 0 }}
            xs={{ span: 12, offset: 0 }}
            bsPrefix="image_col"
          >
            <img className="main_image" src={different_img} />
          </Col> */}

        <div class="deck" id="card-deck">
            
           
        </div>
        </Row>
        <ProgramInfo
          subtitle="I'm different, just like you"
          title="WE ARE ALL IN THIS TOGETHER"
          artistName="TAIWANfest"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FIAmDifferent&amp;src=sdkpreparse"
          color="#D9C739"
        ></ProgramInfo>

        <Second_Title
          secondTitle="About This Work:"
          style={{ fontFamily: "sofia-pro Sans-serif" }}
        ></Second_Title>

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
          togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FIAmDifferent&amp;src=sdkpreparse"
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
