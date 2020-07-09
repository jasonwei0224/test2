import React from 'react';
import './skyOtherArtists.css'


function SkyOtherArtists(props) {
  return (
    <div className="SOA-container" style={{marginTop:"30px"}}>
      <div className="row">
        <div className="col-sm-4">
          <img className="SOA-img" src={props.img1} alt="Project"/>
          <p className="SOA-name">{props.name1}</p>        
        </div>
        <div className="col-sm-4">
          <img className="SOA-img" src={props.img2} alt="Project"/>
          <p className="SOA-name">{props.name2}</p>        
        </div>
        <div className="col-sm-4">
          <img className="SOA-img" src={props.img3} alt="Project"/>
          <p className="SOA-name">{props.name3}</p>        
        </div>
      </div>
    </div>
  );
}

export default SkyOtherArtists;