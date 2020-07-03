import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import "./homeCss/homeMain.css";

function Home2() {
    return (
        <div>
        <Row id="homeFirstRow">
            <HomeTopSection/>
        </Row>
        </div>

    )
}

export default Home2;
