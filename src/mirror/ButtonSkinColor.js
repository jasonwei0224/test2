import React from 'react';
import './ButtonSkinColor.css'

const ButtonSkinColor=(props)=> {
    return (
        <div className="ButtonSkinColor" style={{backgroundColor:props.col}}>
            <p>{props.col}</p>
        </div>
    )
}

export default ButtonSkinColor;