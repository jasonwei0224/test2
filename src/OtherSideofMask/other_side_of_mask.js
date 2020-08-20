import React, { Component } from 'react';
import './other_side_of_mask.css';
import {OBJModel, MTLModel, GLTFModel, AmbientLight, JSONModel} from 'react-3d-viewer'
import image1 from '../assets/image1.jpg';
import ladyhaohao from '../assets/Lady Hao Hao.jpg'
import walter from '../assets/Walter.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgramInfoTwoArtist from "../programInfoTwoArtist"
import Second_Title from "../modules/Second_Title"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../modules/MainContents_Important_with_border"
import MainContents_TwoArtistPic from "../modules/MainContents_TwoArtistPic"
import Footer from '../footer-temp';
import MobileShareButton from "../modules/mobileShareButton";
import ImageWithDescription from"../modules/MainContent_ImageWithDescription";

// import model1mtl from "../assets/texture/MaskModel1.mtl"
// import model1gltf from "../assets/texture2/MaskModel1.gltf"
// import model1obj from "../assets/texture/MaskModel1.obj"
import * as THREE from "three";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
// import {DirectionLight} from "three/src/DirectionLight/DirectionLight.js"

var text = `It is said that words can be sharper than a knife, and oftentimes we say things that are hurtful without it ever being our intention. The purpose of masks is to protect us from getting sick or prevent the spreading of disease, but sometimes it is our own actions or words that do more harm.

This art piece portrays the irony that on the flip side of every beautiful story and gesture exists its potentially damaging impact. Further, the appearance of the inner side of the mask and its similarity to the media’s images of the SARS-CoV-2 virus reflects that it can be difficult for us to differentiate between what is poisonous and what is beautiful. In these current times, we must examine our past behaviours and reflect on how we can learn from them. It takes courage to understand ourselves and each other, and even more so to own our past mistakes.

“The Other Side of Masks” serves as a reminder that our words and actions, in spite of their beauty, can also hold unintentional danger. And just like the two sides of a mask, we must see both sides in order to grow.
`
var artistText1 = `A Taiwanese artist who immigrated to Canada during her high school years, but as she wasn’t allowed to draw or paint in Canada, she soon returned to Taiwan to pursue those desires. After she graduated from university in Taiwan, she returned to Canada to absorb the essence of this diverse land.

Art has always been her pride and joy and feeds her spirit. For her, creativity is like asking herself reflective questions and answering them in the process of self-discovery. In recent years, she has been curious about “installation art” and also experiencing the diverse communities in Canada, learning the creative thinking of experts, and accumulating her own creations. Each time she releases a piece, we see “echoes”, “discussions”, “emotions” and “habits” between art and people, exploring and dancing with diversity.
`
var artistText2 = `A graduate of the Emily Carr University of Art and Design who specializes in animation, loves movies, and is good at storytelling using images; painting is like a bridge that connects his emotions with life, and his artworks are diverse and are full of creativity and life. With the ability to create 2D and 3D animation special effects, Walter Kao is able to create the unexpected. Maybe artists that can draw were born with a spellbook, and are powerful magicians like Walter.
`

class OtherSideOfMask extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    // scene.background = new THREE.Color( 0xFFFFFFF );

    // add renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("#ffffff");
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );

    // add camera
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;

    // camera controls
    this.controls = new OrbitControls(camera, renderer.domElement);

    // lights
    var light = new THREE.PointLight(0xffffff,1,0)
    light.position.set(0, 200, 0)
    scene.add(light)
    var light2 = new THREE.PointLight(0xffffff,1,0)
    light.position.set(100, 200, 100)
    scene.add(light2)
    var light3 = new THREE.PointLight(0xffffff,1,0)
    light.position.set(-100, -200, -100)
    scene.add(light3)

    // loading material
    let mtlLoader = new MTLLoader();
    mtlLoader.load('./MaskModel1.mtl', (materials) =>{
      materials.preload()
      let objLoader = new OBJLoader();
      objLoader.setMaterials(materials)
      objLoader.load('./MaskModel1.obj', (object) => {
        scene.add(object)
      })
    })

    var animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    };
    animate();
  }

  render() {
    let audio = new Audio("/coughing.mp3")
    const start = () => {
      console.log("clicked")
      audio.play()
    }
    return (
      <div>
        <Container fluid>
          <div style={{borderTop: "1px solid #D9C739"}}></div>
          <Row>

            <Col xl={{span:6, offset:0}} lg={{span:12, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}className="model3D-col" >
              <div ref={ref => (this.mount = ref)} />
         </Col>
          </Row>
          <ProgramInfoTwoArtist
            subtitle="Behind the Masks"
            title="THE OTHER SIDE OF MASK"
            artistitle1="Sketch Artist: "
            artistName1="Lady Hao Hao"
            artistitle2="3D Artist: "
            artistName2="Walter Kao"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse"
            color="#D9C739">
          </ProgramInfoTwoArtist>

          <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
          <MainContents_Important_With_Border style={{color:"#0C3866"}} contents="What is something that you can see when you look up, no matter
            wherever you are in the world? The sky is one constant no matter
            where you are and what time of day, it is there above the horizon."></MainContents_Important_With_Border>
          <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
          </MainContents_Middle_Adonis>


          <MainContents_TwoArtistPic pic1={ladyhaohao} title1="Lady Hao Hao"contents1={artistText1} pic2={walter} title2="Walter Kao" contents2={artistText2}></MainContents_TwoArtistPic>
          <div className="people_padding"></div>

          <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse"></MobileShareButton>
        </Container>

        <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
      </div>
    );
  }
}

export default OtherSideOfMask;
