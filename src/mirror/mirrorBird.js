import React from 'react';
import './mirrorBird.css';
import $ from "jquery";
// window.$ = window.jQuery = jQuery;
import pigeon from "../assets/pigeon_stop.svg";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import mouseClick from '../../src/assets/mouseClick.gif'
import mouseClick2 from '../assets/mirror_hint_red.png'
import mouseClick3 from '../assets/mirror_hint_white.png'
import mouseHintFinal from '../assets/mirror_click_clear.png'

class MirrorBird extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      play:false,
      show:0,
    }
  }
  componentDidMount=() =>{

    $('#wrapper_mirror').one('click', function(e) {
      $('#pointerDiv').css({"display":"none"});
      $('#box_1').addClass('bird-container bird-container--one')
      $('#bird_1').addClass('bird bird--one')
      setTimeout(function() {
        $('#container_box_bird_1').css({"display":"none"});
        $('#container_box_bird_2').css({"display":"block"});

        $('#container_box_bird_2').one('click', function(e) {
          e.preventDefault();
          $('#box_2').addClass('bird-container bird-container--one')
          $('#bird_2').addClass('bird bird--one')

          setTimeout(function() {
            $('#container_box_bird_2').css({"display":"none"});
            $('#container_box_bird_3').css({"display":"block"});

            $('#container_box_bird_3').one('click', function(e) {
              e.preventDefault();
              $('#box_3').addClass('bird-container bird-container--one')
              $('#bird_3').addClass('bird bird--one')

              setTimeout(function() {
                $('#container_box_bird_3').css({"display":"none"});
                $('#container_box_bird_4').css({"display":"block"});

                $('#container_box_bird_4').one('click', function(e) {
                  e.preventDefault();
                  $('#box_4').addClass('bird-container bird-container--one')
                  $('#bird_4').addClass('bird bird--one')

                  setTimeout(function() {
                    $('#container_box_bird_4').css({"display":"none"});
                    $('#container_box_bird_15').css({"display":"block"});

                    $('#container_box_bird_15').one('click', function(e) {
                      e.preventDefault();
                      $('#box_15').addClass('bird-container bird-container--one')
                      $('#bird_15').addClass('bird bird--one')

                      setTimeout(function() {
                        e.preventDefault();
                        $('#container_box_bird_15').css({"display":"none"});
                        $('#container_box_bird_5').css({"display":"block"});
                        $('#container_box_bird_66').css({"display":"block"});

                        // $('#container_box_bird_5').one('click', function(e) {
                        //   e.preventDefault();
                        //   $('#box_5').addClass('bird-container bird-container--one')
                        //   $('#bird_5').addClass('bird bird--one')
                        //       setTimeout(function() {
                        //         $('#container_box_bird_66').css({"display":"block"});
                        //
                        //       },4000);//4000
                        //
                        //     });
                      }, 4000) //4000
                    });

                  },4000) //3000

                });

              }, 4000) //4000
            });
          },4000) //4000
        })
      }, 5000) //5000
    });
  }


  cancelCourse() {
    var taiwan = document.getElementsByClassName("cls-5");
    console.log(taiwan);
    taiwan.addEventListener("mouseover", function( event ) {
      console.log("hovering taiwan");
    });
  }

  checkAnswer(){
    var answer = document.getElementById("user_input_mirror").value;
    console.log(answer)
    if(answer.toUpperCase() == "TAIWAN"){
      var audio=new Audio('./猜對音效.mp3');
      audio.play()
      document.getElementById("question_txt").innerText= "Correct!!"
    }else{
      document.getElementById("button_mirror1").style.backgroundColor = "red";
      document.getElementById("button_mirror2").style.backgroundColor = "red";
      document.getElementById("button_mirror3").style.backgroundColor = "red";
      var audio=new Audio('./猜錯音效.mp3');
      document.getElementById("question_txt").innerText= "InCorrect!!"
      audio.play()
      for(var i = 0; i <200; i++){
        document.getElementById("button_mirror1").style.backgroundColor = "red";
        document.getElementById("button_mirror2").style.backgroundColor = "red";
        document.getElementById("button_mirror3").style.backgroundColor = "red";
        setTimeout(function(){
          document.getElementById("button_mirror1").style.backgroundColor = "blue";
          document.getElementById("button_mirror2").style.backgroundColor = "blue";
          document.getElementById("button_mirror3").style.backgroundColor = "blue";
        },500);
      }
      setTimeout(function(){
        document.getElementById("question_txt").innerText = "In life, we often see things that are obvious to us and leave out others who are deemed insignificant but valuable. Other than the pigeon, what is an image that has always been there? Try again if you have overlooked it."
      },1000)
    }
  }
  checkAnswer2(){
    var answer = document.getElementById("user_input_mirror2").value;
    console.log(answer)
    if(answer.toUpperCase() == "TAIWAN"){
      var audio=new Audio('./猜對音效.mp3');
      audio.play()
      document.getElementById("question_txt2").innerText= "Correct!!"
    }else{
      document.getElementById("button_mirror1").style.backgroundColor = "red";
      document.getElementById("button_mirror2").style.backgroundColor = "red";
      document.getElementById("button_mirror3").style.backgroundColor = "red";
      var audio=new Audio('./猜錯音效.mp3');
      audio.play()
      document.getElementById("question_txt2").innerText= "InCorrect!!"
      for(var i = 0; i <200; i++){
        document.getElementById("button_mirror1").style.backgroundColor = "red";
        document.getElementById("button_mirror2").style.backgroundColor = "red";
        document.getElementById("button_mirror3").style.backgroundColor = "red";
        setTimeout(function(){
          document.getElementById("button_mirror1").style.backgroundColor = "blue";
          document.getElementById("button_mirror2").style.backgroundColor = "blue";
          document.getElementById("button_mirror3").style.backgroundColor = "blue";
        },500);
      }
      setTimeout(function(){
        document.getElementById("question_txt2").innerText = "In life, we often see things that are obvious to us and leave out others who are deemed insignificant but valuable. Other than the pigeon, what is an image that has always been there? Try again if you have overlooked it."
      },1000)
    }
  }
  checkAnswer3(){
    var answer = document.getElementById("user_input_mirror3").value;
    console.log(answer)
    if(answer.toUpperCase() == "TAIWAN" || answer =="台灣"){
      var audio=new Audio('./猜對音效.mp3');
      audio.play()
      document.getElementById("question_txt3").innerText= "Correct!!"
    }else{
      document.getElementById("button_mirror1").style.backgroundColor = "red";
      document.getElementById("button_mirror2").style.backgroundColor = "red";
      document.getElementById("button_mirror3").style.backgroundColor = "red";
      var audio=new Audio('./猜錯音效.mp3');
      audio.play()
      document.getElementById("question_txt3").innerText= "InCorrect!!"
      for(var i = 0; i <200; i++){
        document.getElementById("button_mirror1").style.backgroundColor = "red";
        document.getElementById("button_mirror2").style.backgroundColor = "red";
        document.getElementById("button_mirror3").style.backgroundColor = "red";
        setTimeout(function(){
          document.getElementById("button_mirror1").style.backgroundColor = "blue";
          document.getElementById("button_mirror2").style.backgroundColor = "blue";
          document.getElementById("button_mirror3").style.backgroundColor = "blue";
        },500);
        setTimeout(function(){
          document.getElementById("question_txt3").innerText= "In life, we often see things that are obvious to us and leave out others who are deemed insignificant but valuable. Other than the pigeon, what is an image that has always been there? Try again if you have overlooked it."
        },1000)
      }
    }
  }
  refresh(){

    var box2 = document.getElementById("container_box_bird_5");
    box2.style.display="none"
    $('#container_box_bird_6').css({"display":"block"});
    $('#container_box_bird_6').one('click', function(e) {
      $('#box_6').addClass('bird-container bird-container--one')
      $('#bird_6').addClass('bird bird--one')
      setTimeout(function() {
        $('#container_box_bird_6').css({"display":"none"});
        $('#container_box_bird_7').css({"display":"block"});

        $('#container_box_bird_7').one('click', function(e) {
          e.preventDefault();
          $('#box_7').addClass('bird-container bird-container--one')
          $('#bird_7').addClass('bird bird--one')

          setTimeout(function() {
            $('#container_box_bird_7').css({"display":"none"});
            $('#container_box_bird_8').css({"display":"block"});

            $('#container_box_bird_8').one('click', function(e) {
              e.preventDefault();
              $('#box_8').addClass('bird-container bird-container--one')
              $('#bird_8').addClass('bird bird--one')

              setTimeout(function() {
                $('#container_box_bird_8').css({"display":"none"});
                $('#container_box_bird_9').css({"display":"block"});

                $('#container_box_bird_9').one('click', function(e) {
                  e.preventDefault();
                  $('#box_9').addClass('bird-container bird-container--one')
                  $('#bird_9').addClass('bird bird--one')

                  setTimeout(function() {
                    e.preventDefault();
                    $('#container_box_bird_9').css({"display":"none"});
                    $('#container_box_bird_16').css({"display":"block"});

                    $('#container_box_bird_16').one('click', function(e) {
                      $('#box_16').addClass('bird-container bird-container--one')
                      $('#bird_16').addClass('bird bird--one')

                      setTimeout(function() {
                          e.preventDefault();
                        $('#container_box_bird_16').css({"display":"none"});
                        $('#container_box_bird_10').css({"display":"block"});
                        $('#container_box_bird_100').css({"display":"block"});
              //           $('#container_box_bird_10').one('click', function(e) {
              //             $('#box_10').addClass('bird-container bird-container--one')
              //             $('#bird_10').addClass('bird bird--one')
              //
              //             setTimeout(function() {
              //               $('#container_box_bird_100').css({"display":"block"});
              // },4000);
              //
              //           });
                  }, 4000) //4000
                });

              },4000) //3000

            });

          }, 4000) //4000
        });
      },4000) //4000
      })
      }, 5000) //5000

      });
      }
  refresh2(){
    var box2 = document.getElementById("container_box_bird_10");
    box2.style.display="none"
    $('#container_box_bird_11').css({"display":"block"});
    $('#wrapper_mirror').one('click', function(e) {
      $('#box_11').addClass('bird-container bird-container--one')
      $('#bird_11').addClass('bird bird--one')
      setTimeout(function() {
        $('#container_box_bird_11').css({"display":"none"});
        $('#container_box_bird_12').css({"display":"block"});

        $('#container_box_bird_12').one('click', function(e) {
          e.preventDefault();
          $('#box_12').addClass('bird-container bird-container--one')
          $('#bird_12').addClass('bird bird--one')

          setTimeout(function() {
            $('#container_box_bird_12').css({"display":"none"});
            $('#container_box_bird_13').css({"display":"block"});

            $('#container_box_bird_13').one('click', function(e) {
              e.preventDefault();
              $('#box_13').addClass('bird-container bird-container--one')
              $('#bird_13').addClass('bird bird--one')

              setTimeout(function() {
                $('#container_box_bird_13').css({"display":"none"});
                $('#container_box_bird_14').css({"display":"block"});

                $('#container_box_bird_14').one('click', function(e) {
                  e.preventDefault();
                  $('#box_14').addClass('bird-container bird-container--one')
                  $('#bird_14').addClass('bird bird--one')

                  setTimeout(function() {
                    e.preventDefault();
                    $('#container_box_bird_14').css({"display":"none"});
                    $('#container_box_bird_17').css({"display":"block"});
                    $('#container_box_bird_17').one('click', function(e) {
                      e.preventDefault();
                      $('#box_17').addClass('bird-container bird-container--one')
                      $('#bird_17').addClass('bird bird--one')

                    setTimeout(function() {
                      $('#container_box_bird_17').css({"display":"none"});
                      $('#container_box_bird_101').css({"display":"block"});
                        $('#container_box_bird_102').css({"display":"block"});

                      // $('#container_box_bird_101').one('click', function(e) {
                      //   $('#box_101').addClass('bird-container bird-container--one')
                      //   $('#bird_101').addClass('bird bird--one')
                      //
                      //   setTimeout(function() {
                      //     $('#container_box_bird_102').css({"display":"block"});
                      //
                      //   },4000);
                      // });
                    }, 4000);
                    });
                  },4000)

                });

              },4000)

            });
          },4000)
        })
      }, 5000)
    });
  }
  refreshPage(){
    window.location.reload(false);
  }

  render(){

    return (
      <div id="wrapper_mirror" >

        <div id="container_box_bird_1" className="mirror-bird-container">
          <img id="pointerDiv" src={mouseHintFinal}></img>

          <div id="box_1">
            <div id="bird_1"></div>
          </div>
        </div>

        <div id="container_box_bird_2" className="mirror-bird-container2">
          <div id="box_2">
            <div id="bird_2"></div>
          </div>
        </div>

        <div id="container_box_bird_3" className="mirror-bird-container3">
          <div id="box_3">
            <div id="bird_3"></div>
          </div>
        </div>

        <div id="container_box_bird_4" className="mirror-bird-container4">
          <div id="box_4">
            <div id="bird_4"></div>
          </div>
        </div>
        <div id="container_box_bird_15" className="mirror-bird-container15">
          <div id="box_15">
            <div id="bird_15"></div>
          </div>
        </div>

        <div id="container_box_bird_5" className="mirror-bird-container5">
          <div id="box_5">
            <div id="bird_5"></div>
          </div>

          <div id="container_box_bird_66">
            <div id="form_mirror">
              <Row>
                  <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                      <p  id="question_txt" style={{"color":"white"}}>In life, we often see things that are obvious to us and leave out others who are deemed insignificant but valuable.
                        Other than the pigeon, what is an image that has always been there?
                        Try again if you have overlooked it.</p>
                  </Col>
              </Row>
              <Row>
                  <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                      <Form.Control id="user_input_mirror" required size="lg"></Form.Control>
                  </Col>
                  <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <Button onClick={this.checkAnswer}>Submit</Button>
                  {/*}  <p style={{"color":"white"}}>Did you miss something? </p>*/}
                    <Button id="button_mirror1" onClick={this.refresh}>View the drawings again</Button>
                  </Col>

              </Row>
            </div>
          </div>
              </div>
        <div id="container_box_bird_6" className="mirror-bird-container_after_hover">
          <div id="box_6">
            <div id="bird_6"></div>
          </div>
        </div>
        <div id="container_box_bird_7" className="mirror-bird-container2_after_hover">
          <div id="box_7">
            <div id="bird_7"></div>
          </div>
        </div>
        <div id="container_box_bird_8" className="mirror-bird-container3_after_hover">
          <div id="box_8">
            <div id="bird_8"></div>
          </div>
        </div>
        <div id="container_box_bird_9" className="mirror-bird-container4_after_hover">
          <div id="box_9">
            <div id="bird_9"></div>
          </div>
        </div>
        <div id="container_box_bird_16" className="mirror-bird-container15_after_hover">
          <div id="box_16">
            <div id="bird_16"></div>
          </div>
        </div>

        <div  id="container_box_bird_10"  className="mirror-bird-container5_after_hover">
        <div id="box_10">
            <div id="bird_10"></div>
          </div>
          <div id="container_box_bird_100">
            <div id="form_mirror2">
              <Row>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <p id="question_txt2" style={{"color":"white"}}>In life, we often see things that are obvious to us and leave out others who are deemed insignificant but valuable.
                      Other than the pigeon, what is an image that has always been there?
                      Try again if you have overlooked it. </p>
                </Col>
            </Row>
            <Row>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <Form.Control id="user_input_mirror2" required size="lg"></Form.Control>
                </Col>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                  <Button onClick={this.checkAnswer2}>Submit</Button>
                  {/*}<p style={{"color":"white"}}>Did you miss something? </p>*/}
                  <Button  id="button_mirror2" onClick={this.refresh2}>View the drawings again</Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div id="container_box_bird_11" className="mirror-bird-container_after_hover">
          <div id="box_11">
            <div id="bird_11"></div>
          </div>
        </div>
        <div id="container_box_bird_12" className="mirror-bird-container2_after_hover">
          <div id="box_12">
            <div id="bird_12"></div>
          </div>
        </div>
        <div id="container_box_bird_13" className="mirror-bird-container3_after_hover">
          <div id="box_13">
            <div id="bird_13"></div>
          </div>
        </div>
        <div id="container_box_bird_14" className="mirror-bird-container4_after_hover">
          <div id="box_14">
            <div id="bird_14"></div>
          </div>
        </div>
        <div id="container_box_bird_17" className="mirror-bird-container15_after_hover">
          <div id="box_17">
            <div id="bird_17"></div>
          </div>
        </div>
        <div  id="container_box_bird_101"  className="mirror-bird-container5_after_hover">
        <div id="box_101">
            <div id="bird_101"></div>
          </div>
          <div id="container_box_bird_102">
            <div id="form_mirror2">
              <Row>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <p id="question_txt3"style={{"color":"white"}}>In life, we often see things that are obvious to us and leave out others who are deemed insignificant but valuable.
                      Other than the pigeon, what is an image that has always been there?
                      Try again if you have overlooked it. </p>
                </Col>
            </Row>
            <Row>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <Form.Control id="user_input_mirror3" required size="lg"></Form.Control>
                </Col>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                  <Button  onClick={this.checkAnswer3}>Submit</Button>
                  {/*}<p style={{"color":"white"}}>Did you miss something? </p>*/}
                  <Button id ="button_mirror3" onClick={this.refreshPage}>Restart</Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default MirrorBird;
