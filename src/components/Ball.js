import React from 'react';
import * as THREE from 'three';
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture';
import {useThree} from '@react-three/fiber';
// Tutorial: https://redstapler.co/three-js-realistic-material-reflection-tutorial/

const Ball = () => {

  const ballParams = {
    radius: 100,
    widthSegment: 64,
    heightSegment: 64
  }

  const normalMap3 = new THREE.CanvasTexture( new FlakesTexture() );
  normalMap3.wrapS = THREE.RepeatWrapping;
  normalMap3.wrapT = THREE.RepeatWrapping;
  normalMap3.repeat.x = 10;
  normalMap3.repeat.y = 6;
  normalMap3.anisotropy = 16;

  const ballMaterial = {
    clearcoat: 1.0,
    cleacoatRoughness:0.1,
    metalness: 0.9,
    roughness:0.5,
    color: 0x8418ca,
    normalMap: normalMap3,
    normalScale: new THREE.Vector2(0.15,0.15),
    // envMap: envmap.texture
  };

  /*let material = new THREE.MeshPhysicalMaterial( {
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    metalness: 0.9,
    roughness: 0.5,
    color: 0x0000ff,
    normalMap: normalMap3,
    normalScale: new THREE.Vector2( 0.15, 0.15 )
  } );*/

  return(
      <mesh>
        <sphereBufferGeometry args={[ballParams.radius, ballParams.widthSegment, ballParams.heightSegment]} />
        <meshPhysicalMaterial args={[ballMaterial]}/>
      </mesh>
  )
}

export default Ball;
