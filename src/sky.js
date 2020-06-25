import React from 'react';
import ImgSlider from './img_slider';
import ProgramInfoTB from './programInfoTwoButtons';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import './sky.css'

function Sky() {
    return (
        <div>
            <div>
                <ImgSlider/>
            </div>
        
           <div className="skyIntroSection">
               <ProgramInfoTB subtitle="Installation art" title="SKY" artistName="Jessica Sung" url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/"></ProgramInfoTB>
           </div>
        
            <div className="skyImagesSection">
                <div className="row">
                    <div className="blue"></div>
                    <img src={image1} alt="placeholder"></img>
                    <img src={image2} alt="placeholder"></img>
                    <div className="red"></div>
                </div>
        
                <div className="row">
                    <div className="blue"></div>
                    <img src={image1} alt="placeholder"></img>
                    <img src={image2} alt="placeholder"></img>
                    <div className="red"></div>
                </div>
        
                <div className="row">
                    <div className="blue"></div>
                    <img src={image1} alt="placeholder"></img>
                    <img src={image2} alt="placeholder"></img>
                    <div className="red"></div>
                </div>
            </div>
        
            <div className="skyBottomSection">
        
                <p>The first lesbian movie I loved was Heavenly Creatures, Peter Jacksonn's sumptuous 1994 fils starring a young Kate Winslet as a dangerously charismatic schoolgirl who enraptures a sallow classmate with her phantasmagoric fantasy world. In the end, they kill the classmate's mother. At age fourteen, that squared with my concept of love: predicated on fantasy, eroticized by power imbalance, likely to end in murder - not so much that of anyone's mother, but more likely of me, by the strength of my own whirling feelings.</p>
                
                <p>A year later, it was The Incredibly True Adventures of Two Girls in Love, Maria Maggenti's considerably less gothic tale of high school senior Randy (a young, butch Tina from The L Word), who has been sleeping with an older, married woman when she meets Evie, a rich and popular girl who stops at the gas station where Randy works. The movie ends with the two kissing amid a chaotic muddle of class tension, homophobic friends, and angry parents and school administrators. It was a perfect anthem for me at age fifteen, as I had recently begun making out with my rich best friend and was the only out kid in my high school class.</p>
                
                <p>After that came Bound, Chasing Amy, All Over Me, High Art, and But I'm a Cheerleader. I watched and re-watched all of these movies because they showed me myself. Not only because I was queer and prone to phantasmagoric imaginings - as well as to listening to Patti Smith on repeat, wearing stilettos, and heroin addicition - but also because they reflected and suggested my vision of love: as sexy and codependent, forged in opposition to some external conflict. It's no surprise that both I and the movies I worshiped relied upon a certain kind of high-femme, drug-addled, ambisexual Riot Grrrl iconography. After all, we grew out of the same '90s post-AIDS homophobia, Cindy Crawford-cum-heroin chic, third-wave feminist stew.</p>
            </div>
        </div>
    );
}

export default Sky;
