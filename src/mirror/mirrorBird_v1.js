import React from 'react';
import './mirrorBird_v1.css';


class MirrorBirdV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      fade: false,
      background: "doctor"
    }
  }

  showButton1() {
    document.getElementById("MB-btn1").style.display = "initial";
  }

  showButton2() {
    document.getElementById("MB-btn2").style.display = "initial";
  }

  moveBird=() => {
    console.log("move bird")
    return (
      <>
        <div className="MB-bird-container2">
          <div className="MB-bird2"></div>
        </div>
        {setTimeout(this.showButton2, 5500)}
        <button
        id="MB-btn2"
        onClick={() => this.setState({ background: "doctor"})}
        style={{position: "absolute", top: "20%", left: "30%", display:"none"}}>
        Click me!
      </button>
    </>
    );
  }

  render(){
    const fade = this.state.fade
    const background = this.state.background

    return (
      <div className={"MB-container-"+background}>
        <div className="MB-bird-container">
          <div className="MB-bird"></div>
        </div>
        {setTimeout(this.showButton1, 6000)}
        <button
          id="MB-btn1"
          ref='button'
          onClick={() => this.setState({ fade: true, background: "firefighter"})}
          onAnimationEnd={() => this.setState({ fade: false })}
          className={fade ? 'fade' : 'clickBtn1'}>
          Click me!
        </button>
        {background=="firefighter"? this.moveBird() : <></>}
      </div>
    );
  }

}


export default MirrorBirdV1;


// import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
// import './mirrorBird_v1.css';


// const useClick = onClick => {
//   // if (typeof onClick !== "function") {
//   //   return;
//   // }
//   const element = useRef();
//   useEffect(() => {
//     // called in componentDidMount
//     if (element.current) {
//       element.current.addEventListener("click", onClick);
//     }
//     // called in componentWillUnmount
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener("click", onClick);
//       }
//     };
//   }, []);
//   return element;
// };

// const MirrorBirdV1 = () => {
//   const showBird = () => {
//     console.log("say Hello.");
//     return (
//       <div className="bird-container bird-container--one">
//         <div className="bird bird--one"></div>
//       </div>
//     );
//   }
//   const title = useClick(showBird);

//   return (
//     <div className="MB-container">
//       <button
//         ref={title}>
//         Click me!
//       </button>
      
//       <div className="MB-bird-container MB-bird-container--one">
//         <div className="MB-bird MB-bird--one"></div>
//       </div>

//     </div>
//   );
// }


// export default MirrorBirdV1;