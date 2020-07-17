import React from 'react';
import './mirrorBird.css';
import $ from "jquery";
// window.$ = window.jQuery = jQuery;
import pigeon from "../assets/pigeon_stop.svg";


class MirrorBird extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      show:0,
    }


  
    
  }
  componentDidMount=() =>{
    $('#wrapper_mirror').one('click', function(e) {
      console.log("Please done");
      $('#box_1').addClass('bird-container bird-container--one')
      $('#bird_1').addClass('bird bird--one')
      setTimeout(function() {
        $(".test1PlizWorking").css({"visibility":"visible"});
        $('#box_1').css({"display":"none"});
        $('.test1PlizWorking').one('click', function(e) {
          e.preventDefault();
          $('#box_1').css({"display":"block"});
          $(".test1PlizWorking").css({"visibility":"hidden"});
          $('#box_1').addClass('bird-container bird-container--two')
          setTimeout(function() {
            console.log("asdf?");
            $('#container_box_bird_1').css({"display":"none"});
            $('#container_box_bird_2').css({"display":"block"});
            $('#container_box_bird_2').on('click', function() {
              $('#box_2').css({"display":"block"});
              $('#box_1').css({"z-index":"1"});
              $('#box_2').addClass('bird-container bird-container--three')
              $('#bird_2').addClass('bird bird--one')
            
              setTimeout(function() {
                $(".test2PlizWorking").css({"visibility":"visible"});
                $('#box_2').css({"display":"none"});

                $('.test2PlizWorking').on('click', function() {
                  $(".test2PlizWorking").css({"visibility":"hidden"});
                  
                  $('#box_2').addClass('bird-container bird-container--four')
                  
                });
              }, 3000)
            })
          }, 2000)
        })
      }, 5000)
    });
    $(".test2PlizWorking").css({"visibility":"hidden"});
    

  }
  
  render(){

    return (
      <div id="wrapper_mirror" >
        
        <div id="container_box_bird_1" className="mirror-bird-container">
          <div id="box_1">
            <div id="bird_1"></div>
            
          </div>
          <div class="test1PlizWorking">
              <img src={pigeon}></img>
          </div>
        </div>

        <div id="container_box_bird_2" className="mirror-bird-container2">
          <div id="box_2">
            <div id="bird_2"></div>
          </div>
          <div class="test2PlizWorking">
              <img src={pigeon}></img>
          </div>
        </div>



        
      </div>
    );
  }

}


export default MirrorBird;