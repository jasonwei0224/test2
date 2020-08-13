import React from 'react';
import './mirrorBird.css';
import $ from "jquery";
// window.$ = window.jQuery = jQuery;
import pigeon from "../assets/pigeon_stop.svg";

class MirrorBird extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      play:false,
      show:0,
    }
  }



  componentDidMount=() =>{

    $('#test1_sq').on('mouseenter', function() {
      var audio=new Audio('https://assets.coderrocketfuel.com/pomodoro-times-up.mp3');
      audio.play()
      $('.mirror-bird-container').addClass('mirror-bird-container_after_hover ')
    })
    $('#test2_sq').on('mouseenter', function() {
      var audio=new Audio('https://assets.coderrocketfuel.com/pomodoro-times-up.mp3');
      audio.play()
      $('.mirror-bird-container2').addClass('mirror-bird-container2_after_hover ')
    })
    $('#test3_sq').on('mouseenter', function() {
      var audio=new Audio('https://assets.coderrocketfuel.com/pomodoro-times-up.mp3');
      audio.play()
      $('.mirror-bird-container3').addClass('mirror-bird-container3_after_hover ')
    })
    $('#test4_sq').on('mouseenter', function() {
      var audio=new Audio('https://assets.coderrocketfuel.com/pomodoro-times-up.mp3');
      audio.play()
      $('.mirror-bird-container4').addClass('mirror-bird-container4_after_hover ')
    })

    $('#wrapper_mirror').one('click', function(e) {
      $('#box_1').addClass('bird-container bird-container--one')
      $('#bird_1').addClass('bird bird--one')
      setTimeout(function() {
        $('#container_box_bird_1').css({"display":"none"});
        $('#container_box_bird_2').css({"display":"block"});

        $('#container_box_bird_2').one('click', function(e) {
          e.preventDefault();
          $('#box_2').addClass('bird-container bird-container--three')
          $('#bird_2').addClass('bird bird--one')

          setTimeout(function() {
            $('#container_box_bird_2').css({"display":"none"});
            $('#container_box_bird_3').css({"display":"block"});

            $('#container_box_bird_3').one('click', function(e) {
              e.preventDefault();
              $('#box_3').addClass('bird-container bird-container--five')
              $('#bird_3').addClass('bird bird--one')

              setTimeout(function() {
                $('#container_box_bird_3').css({"display":"none"});
                $('#container_box_bird_4').css({"display":"block"});

                $('#container_box_bird_4').one('click', function(e) {
                  e.preventDefault();
                  $('#box_4').addClass('bird-container bird-container--five')
                  $('#bird_4').addClass('bird bird--one')

                  setTimeout(function() {
                    $('#container_box_bird_4').css({"display":"none"});
                    $('#container_box_bird_5').css({"display":"block"});
                  },5000);

                });

              }, 5000)
            });
          },5000)
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

  render(){

    return (
      <div id="wrapper_mirror" >

        <div id="container_box_bird_1" className="mirror-bird-container">
          <div id="box_1">
            <div id="bird_1"></div>
          </div>
          <div class="test1_square" id="test1_sq"></div>
        </div>

        <div id="container_box_bird_2" className="mirror-bird-container2">
          <div id="box_2">
            <div id="bird_2"></div>
          </div>
          <div class="test2_square" id="test2_sq"></div>
        </div>

        <div id="container_box_bird_3" className="mirror-bird-container3">
          <div id="box_3">
            <div id="bird_3"></div>
          </div>
          <div class="test3_square" id="test3_sq"></div>
        </div>

        <div id="container_box_bird_4" className="mirror-bird-container4">
          <div id="box_4">
            <div id="bird_4"></div>
          </div>
          <div class="test4_square" id="test4_sq"></div>
        </div>

        <div id="container_box_bird_5" className="mirror-bird-container5">
          <div id="box_5">
            <div id="bird_5"></div>
          </div>
          <div class="test5_square" id="test5_sq"></div>
        </div>

      </div>
    );
  }

}


export default MirrorBird;
