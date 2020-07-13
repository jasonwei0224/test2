import React from 'react';
import placeHolder from "../assets/placeholder.jpg";
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";
import homepage_placeholder_sm_1 from "../assets/homepage_placeholder_sm_1.jpg";
import homepage_placeholder_sm_2 from "../assets/homepage_placeholder_sm_2.jpg";
import homepage_placeholder_sm_3 from "../assets/homepage_placeholder_sm_3.jpg";


function ProjectScrollable(props) {
    return (
        <div id="projectsScrollingSection">
            <ProjectNameRight image={homepage_placeholder_sm_1} name="Sky"/>
            <ProjectNameLeft image={homepage_placeholder_sm_1} name="I am different, just like you"/>
            <ProjectNameRight image={homepage_placeholder_sm_1} name="The Other Side of Mask"/>
            <ProjectNameLeft image={homepage_placeholder_sm_2} name="Paul's Apples"/>
            <ProjectNameRight image={homepage_placeholder_sm_2} name="Mirrors"/>
            <ProjectNameLeft image={homepage_placeholder_sm_3} name="(UN) Being Chinese"/>
            <div id="emptySpace"></div>
        </div>
    )
}

export default ProjectScrollable;
