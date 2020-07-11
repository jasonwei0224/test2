import React from 'react';
import './mirrorBird.css';


class MirrorBird extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { fade: false }
  // }

  render(){
    // const fade = this.state.fade

    return (
      <div class="mirror-bird-container">
        {/* <button
        ref='button'
        onClick={() => this.setState({ fade: true })}
        onAnimationEnd={() => this.setState({ fade: false })}
        className={fade ? 'fade' : ''}>
        Click me!
      </button> */}
        
        <div class="bird-container bird-container--one">
          <div class="bird bird--one"></div>
        </div>
        
        
      </div>
    );
  }

}


export default MirrorBird;