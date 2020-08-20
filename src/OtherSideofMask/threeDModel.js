import React, { Component } from 'react';
import * as THREE from "three";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class threeDModel extends Component {

  componentDidMount() {
    var mtlpath = this.props.mtl;
    var objpath = this.props.obj;


    var scene = new THREE.Scene();
    // var scene2 = new THREE.Scene();
    // add renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("#ffffff");
    renderer.setSize( window.innerWidth, 800);
    this.mount.appendChild( renderer.domElement );

    // var renderer2 = new THREE.WebGLRenderer();
    // renderer2.setClearColor("#ffffff");
    // renderer2.setSize( window.innerWidth, 800);
    // this.mount2.appendChild(renderer2.domElement);

    // add camera
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = -3;
    camera.position.y = -1;
    camera.position.x = -3;

    // var camera2 = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    // camera2.position.z = -3;
    // camera2.position.y = -1;
    // camera2.position.x = -3;

    // camera controls
    this.controls = new OrbitControls(camera, renderer.domElement);
    // this.controls2 = new OrbitControls(camera2, renderer2.domElement);

    // lights
    var light = new THREE.PointLight(0xffffff,1,0)
    light.position.set(0, 200, 0)
    scene.add(light)
    var light2 = new THREE.PointLight(0xffffff,1,0)
    light2.position.set(100, 200, 100)
    scene.add(light2)
    var light3 = new THREE.PointLight(0xffffff,1,0)
    light3.position.set(2000, 2000,50)
    scene.add(light3)
    //
    // scene2.add(light3)
    // scene2.add(light)
    // scene2.add(light2)

    // loading material
    let mtlLoader = new MTLLoader();
    mtlLoader.load(mtlpath, (materials) =>{
      materials.preload()
      let objLoader = new OBJLoader();
      objLoader.setMaterials(materials)
      objLoader.load(objpath, (object) => {
        object.rotation.x = -28/180* Math.PI;
        object.rotation.y = -50/180*Math.PI;
        // object.geometry.center()
        THREE.Geometry()
        object.translateY(-1.5);
        scene.add(object)
      })
    })
    //
    // let mtlLoader2 = new MTLLoader();
    // mtlLoader2.load('./MaskModel1.mtl', (materials2) =>{
    //   materials2.preload()
    //   let objLoader2 = new OBJLoader();
    //   objLoader2.setMaterials(materials2)
    //   objLoader2.load('./MaskModel1.obj', (object2) => {
    //     object2.rotation.x = -28/180* Math.PI;
    //     object2.rotation.y = -50/180*Math.PI;
    //     // object.geometry.center()
    //     THREE.Geometry()
    //     object2.translateY(-1.5);
    //     scene2.add(object2)
    //   })
    // })


    var animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    };
    animate();
    // var animate2 = function () {
    //   requestAnimationFrame( animate );
    //   renderer.render( scene, camera );
    // };
    // animate2();
  }

    render() {
      return (
          <Container fluid>
          <Row>
              <Col xl={{span:12, offset:0}} lg={{span:12, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}className="model3D-col" >
            <div ref={ref => (this.mount = ref)} />
            </Col>
            </Row>
          </Container>
        );
      }
    }
export default threeDModel;
