import React from 'react';
import './mirrorBird.css';
import $ from "jquery";
// window.$ = window.jQuery = jQuery;
import pigeon from "../assets/pigeon_stop.svg";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

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
                    $('#container_box_bird_5').css({"display":"block"});

                    $('#container_box_bird_5').one('click', function(e) {
                      e.preventDefault();
                      $('#box_5').addClass('bird-container bird-container--one')
                      $('#bird_5').addClass('bird bird--one')

                      setTimeout(function() {
                        e.preventDefault();
                        $('#container_box_bird_66').css({"display":"block"});
                      }, 4000)
                    });

                  },3000)

                });

              }, 4000)
            });
          },4000)
        })
      }, 5000)
    });
  }


  cancelCourse() {
    var taiwan = document.getElementByClassName("cls-5");
    console.log(taiwan);
    taiwan.addEventListener("mouseover", function( event ) {
      console.log("hovering taiwan");
    });
  }

  checkAnswer(){
    var answer = document.getElementById("user_input_mirror").value;
    console.log(answer)
    if(answer.toUpperCase() == "TAIWAN"){
      var audio=new Audio('https://assets.coderrocketfuel.com/pomodoro-times-up.mp3');
      audio.play()
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


                    $('#container_box_bird_5').css({"display":"block"});

              

                  },1000)

                });

              },3000)
            });
          },4000)
        })
      }, 5000)
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
                    $('#container_box_bird_10').css({"display":"block"});
                    // setTimeout(function() {
                    //   e.preventDefault();
                    //   $('#container_box_bird_10').one('click', function(e) {
                    //     e.preventDefault();
                    //     $('#box_10').addClass('bird-container bird-container--one')
                    //     $('#bird_10').addClass('bird bird--one')
                    //     setTimeout(function() {
                    //       e.preventDefault();
                    //      $('#container_box_bird_10').css({"display":"none"});
                    //       $('#container_box_bird_5').css({"display":"block"});
                    //       $('#container_box_bird_66').css({'display':'block'});

                    //     }, 3000)
                    //   })
                    // },1000)

                  },1000)

                });

              },3000)
            });
          },4000)
        })
      }, 5000)
    });
  }


  render(){

    return (
      <div id="wrapper_mirror" >

        <div id="container_box_bird_1" className="mirror-bird-container">
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

        <div id="container_box_bird_5" className="mirror-bird-container5">
          <div id="box_5">
            <div id="bird_5"></div>
          </div>

          <div id="container_box_bird_66">
            <div id="form_mirror">
              <Row>
                  <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                      <h3>What symbols were common across all pictures? (excluding the pigeon) </h3>
                  </Col>
              </Row>
              <Row>
                  <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                      <Form.Control id="user_input_mirror" required size="lg"></Form.Control>
                  </Col>
                  <Button onClick={this.checkAnswer}>Submit</Button>
                  <h3>Did you miss something? </h3>
                  <Button onClick={this.refresh}>View the drawings again</Button>
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

        <div  id="container_box_bird_10"  className="mirror-bird-container5">
          <div id="container_box_bird_100">
            <div id="form_mirror">
              <Row>
                  <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                      <h3>What symbols were common across all pictures? (excluding the pigeon) </h3>
                  </Col>
              </Row>
              <Row>
                  <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                      <Form.Control id="user_input_mirror" required size="lg"></Form.Control>
                  </Col>
                  <Button onClick={this.checkAnswer}>Submit</Button>
                  <h3>Did you miss something? </h3>
                  <Button onClick={this.refresh2}>View the drawings again</Button>
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

      </div>
    );
  }

}


export default MirrorBird;
