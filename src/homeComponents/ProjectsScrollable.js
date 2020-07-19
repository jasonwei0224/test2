import React from 'react';
import placeHolder from "../assets/placeholder.jpg";
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";
import homepage_placeholder_sm_1 from "../assets/homepage_placeholder_sm_1.jpg";
import homepage_placeholder_sm_2 from "../assets/homepage_placeholder_sm_2.jpg";
import homepage_placeholder_sm_3 from "../assets/homepage_placeholder_sm_3.jpg";
import sky_top_tor from '../assets/sky_top_tor.jpg'
import different_top_tor from '../assets/different_top_tor.jpg';
import otherside_top_tor from '../assets/otherside_top_tor.jpg';
import apple_top_tor from '../assets/apple_top_tor.jpg';
import mirror_top_tor from '../assets/mirror_top_tor.jpg';
import people_and_mask_top_tor from '../assets/people_and_mask_top_tor.jpg';

function ProjectScrollable(props) {
    return (
        <div id="projectsScrollingSection">
          <ProjectNameRight image={sky_top_tor} name="Sky"/>
                    <ProjectNameLeft image={different_top_tor} name="I am different, just like you"/>
          <ProjectNameRight image={mirror_top_tor} name="Mirrors"/>

            <ProjectNameRight image={people_and_mask_top_tor} name=""/>
          <ProjectNameLeft image={apple_top_tor} name="Paul's Apples"/>
          <ProjectNameRight image={otherside_top_tor} name="The Other Side of Mask"/>


            {/*}<ProjectNameLeft image={homepage_placeholder_sm_3} name="(UN) Being Chinese"/>*/}
            <div id="emptySpace"></div>
        </div>
    )
}

export default ProjectScrollable;
