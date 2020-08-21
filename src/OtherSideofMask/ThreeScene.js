import React, { Component } from "react";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


class ThreeScene extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();

    //Add Renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("#ffffff");
    renderer.setSize(window.innerWidth, 800);
    this.mount.appendChild(renderer.domElement);

    //add Camera
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = -3;
    camera.position.y = -1;
    camera.position.x = -3;

    //Camera Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    //LIGHTS
    var lights = [];
    lights[0] = new THREE.DirectionalLight(0xffffff, 1, 0);
    lights[1] = new THREE.DirectionalLight(0xffffff, 1, 0);
    lights[2] = new THREE.AmbientLight(0xffffff, 1, 0);
    lights[0].position.set(-100, 200, -100);
    lights[1].position.set(100, 200, 100);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);

    // <-- Loading 3d Models -->
    //Loading Material 
    var mtlLoader = new MTLLoader();
    mtlLoader.load(this.props.mtl, materials => {
      materials.preload();
      console.log("Material loaded");
      //Load Object Now and Set Material
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        this.props.obj,
        object => {
          object.rotation.x = -28/180* Math.PI;
          object.rotation.y = -50/180*Math.PI;
          object.translateY(-1.5);
          scene.add(object);
        },
        xhr => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        error => {
          console.log("An error happened" + error);
        }
      );
    });
    var animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    };
    animate();
  }


  render() {
    return (
      <div ref={mount => (this.mount = mount)} style={{width:"1800px", height:"800px"}}/>
    );
  }
}
export default ThreeScene;
