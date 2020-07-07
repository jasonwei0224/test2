import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import HomeSecondSection from './homeSecondSection';
import "./homeCss/homeMain.css";
import HomeProjectRight from './HomeProjectRight';
import HomeProjectLeft from './HomeProjectLeft';

function Home2() {
    return (
        <div id="homeMainDiv">
        <Row id="homeFirstRow">
            <HomeTopSection/>
        </Row>
            <HomeSecondSection header="header"/>
            <HomeProjectRight title="SKY"/>
            <HomeProjectLeft title="I'M DIFFERENT, JUST LIKE YOU"/>
            <HomeProjectRight title="THE OTHER SIDE OF MASK"/>
            <HomeProjectLeft title="PAUL'S APPLES"/>
            <HomeProjectRight title="MIRROR"/>
            <HomeProjectLeft title="(UN) BEING CHINESE"/>
        </div>

    )
}

export default Home2;
