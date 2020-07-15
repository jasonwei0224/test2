import React from 'react';
import './mirrorBird.css';
import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;


class MirrorBird extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      show:0,
    }
    this.changeBird = this.changeBird.bind(this);
    this.testFunction = this.testFunction.bind(this);
  }
  testFunction() {
    document.addEventListener('DOMContentLoaded', function() {
      console.log("Bae");
      var styleTest=document.getElementById('test1Container-one').style;
      styleTest.animationPlayState="running";
      window.setTimeout(function() {console.log("inside testFunction")}, 2000); 
  }, false);
    
  }
  
  changeBird() {
    this.setState({show:this.state.show+1})
    console.log(this.state.show);
    // document.getElementById('test1bird').style.backgroundColor="red";
    
    // document.getElementById('test1Container-one').className="bird-container bird-container--two";
    // document.getElementById('test1bird').className="bird bird--two";
    // document.getElementById('test1bird2').style.visibility="hidden";
    // console.log("asdfasdf1"+document.getElementById('test1Container-one').style.webkitAnimationPlayState =="paused");
    // console.log("asdfasdf2"+document.getElementById('test1Container-one').style.webkitAnimationPlayState=="running");
    // if(this.state.show%2!=0) {
        document.getElementById('test1bird').style.animationPlayState="paused";
        document.getElementById('test1Container-one').style.animationPlayState="paused";
        document.getElementById('test1Container-one').style.visibility="hidden";
    // }else {
    //   // document.getElementById('test2bird').style.animationPlayState="running";
    //   document.getElementById('test1Container-two').style.animationPlayState="running";
    //   document.getElementById('test1Container-one').style.visibility="visible";
    //   document.getElementById('test1Container-one').style.animationPlayState="running";
    //   document.getElementById('test1bird').style.animationPlayState="running";
    }
  

  render(){
    this.testFunction(); 
    return (
      <div className="mirror-bird-container">
        
        <div id="test1Container-one" className="bird-container bird-container--one"  onClick={()=>this.changeBird()}>
          <div id="test1bird" className="bird bird--one"></div>
        </div>

        {/* <div id="test1Container-two" className="bird-container bird-container--two">
          <div id="test2bird" className="bird bird--two"></div>
        </div> */}
        
        
      </div>
    );
  }

}


export default MirrorBird;