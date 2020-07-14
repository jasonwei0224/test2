import React from 'react';
import './mirrorBird_v1.css';


class MirrorBirdV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fade: false }
  }

  getAnimatedBird() {
    return (
      <div className="MB-bird-container">
        <div className="MB-bird"></div>
      </div>
    );
  }

  render(){
    const fade = this.state.fade

    return (
      <div className="MB-container">
        <button
          ref='button'
          onClick={() => { this.setState({ fade: true }); this.getAnimatedBird();}}
          onAnimationEnd={() => this.setState({ fade: false })}
          className={fade ? 'fade' : 'clickBtn'}>
          Click me!
        </button>
        {this.state.fade? this.getAnimatedBird() : <div/>}
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