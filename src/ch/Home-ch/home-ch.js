import React from 'react';
import placeholder from '../../assets/placeholder.jpg';
import LogoSlider from '../../logoSlider';
import './home-ch.css'

const styles = {
    pictureLefted: {
        left: "0%",
    },
    pictureRighted: {
        right: "50%",
    },
};

const data = [
    {
        title: "Sky",
        route: "Sky",
        image: "https://via.placeholder.com/300x400",
        style: styles.pictureLefted
    },
    {
        title: "I am\ndifferent,\njust like you",
        route: "IAmDifferent",
        image: "https://via.placeholder.com/300x400",
        style: styles.pictureRighted
    },
    {
        title: "The other side\nof Mask",
        route: "OtherSideOfMask",
        image: "https://via.placeholder.com/300x400",
        style: styles.pictureLefted
    },
    {
        title: "Paul's Apples",
        route: "PaulsApple",
        image: "https://via.placeholder.com/300x400",
        style: styles.pictureRighted
    },
    {
        title: "Mirroring",
        route: "Mirror",
        image: "https://via.placeholder.com/300x400",
        style: styles.pictureLefted
    }
];

function Home_ch() {
    return (
        <div>
            <div className="row no-gutters topSection">
                <div className="col leftSide">
                    <img src={placeholder} alt="placeholder" style={{marginLeft:"20%", marginTop:"15%", maxWidth:"70%", height:"auto"}} ></img>
                </div>
                <div className="col rightSide">
                    {data.map((program, index) => (
                        <Program key={index} image={program.image} title={program.title} style={program.style}></Program>
                    ))}
                </div>
            </div>

            <div className="middleSection">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>

            <div className="bottomSection">
                {data.map((program, index) => (
                    <ProgramRoute key={index} title={program.title} route={program.route}></ProgramRoute>
                ))}
                <LogoSlider />
            </div>
        </div>
    );
}

const Program = (props) => {
    return (
        <div className="row program">
            <div className="col image" style={props.style}>
                <img src={props.image} alt={props.title} ></img>
            </div>
            <div className="col title" style={props.style}>
                <h5>{props.title}<hr /></h5>
            </div>
        </div>
    )
}

const ProgramRoute = (props) => {
    return (
        <div className="programRoute">
            <div className="left">
                <a className="routeTitle" href={props.route} >
                    <h1>{props.title}</h1>
                    <hr />
                </a>
            </div>
            <div className="right">
            </div>
        </div>
    )
}

export default Home_ch;
