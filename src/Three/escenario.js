import { inheritInnerComments } from "@babel/types";
import THREE from "./three.module";

var container;
var sceneWidth,sceneHeight;
var scene;
var renderer;
var camera;
var controls;

init();

function init(){

    createScene();
    Update();

}

function createScene(){
    sceneWidth = window.innerWidth;
    sceneWidth = window.innerHeight;

    scene = new THREE.Scene();
}

function update(){


}

function render(){

}


