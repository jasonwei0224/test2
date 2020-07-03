import React from 'react';
import placeHolder from "../assets/placeholder.jpg";
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";

function ProjectScrollable(props) {
    return (
        <div id="projectsScrollingSection">
            <ProjectNameRight image={placeHolder} name="Sky"/>
            <ProjectNameLeft image={placeHolder} name="I am different, just like you"/>
            <ProjectNameRight image={placeHolder} name="The Other Side of Mask"/>
            <ProjectNameLeft image={placeHolder} name="Paul's Apples"/>
            <ProjectNameRight image={placeHolder} name="Mirrors"/>
            <ProjectNameLeft image={placeHolder} name="(UN) Being Chinese"/>
            <div id="emptySpace"></div>
        </div> 
    )
}

export default ProjectScrollable;