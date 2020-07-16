import React from 'react';
import './mirrorBird_v1.css';


class MirrorBirdV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      background: "doctor",
      birdClicked: false
    }
  }

  render(){
    const background = this.state.background
    const birdClicked = this.state.birdClicked
    const styles = {
      birdNormal:{animationFillMode:'forwards'},
      birdClicked:{animationFillMode:'none'}
    }

    return (
      <div className={"MB-container-"+background}>

        {/* Bird flies from top-left to bottom-right in doctor.jpg on initial render */}
        <div className="MB-bird-container" style={birdClicked ? styles.birdClicked : styles.birdNormal}>
          <div className="MB-bird" 
            onClick={() => 
              this.setState({ 
                background: "firefighter", 
                birdClicked: true
              })}
            style={birdClicked ? styles.birdClicked : styles.birdNormal}>     
          </div>
        </div>

        {/* Bird flies from doctor.jpg to firefighter.jpg on click */}
        {background=="firefighter" ? 
          <div className="MB-bird-container2">
            <div className="MB-bird2"></div>
          </div>
        : <></>}

      </div>
    );
  }
}


export default MirrorBirdV1;
