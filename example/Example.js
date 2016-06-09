
import React, { Component } from 'react'
// import { Renderer, Camera, Scene } from '../lib'
import {
  Renderer, Camera, Scene, Light,
  AudioListener,
  OrbitControls,
  // FirstPersonControls,
} from '../src'
import ExMyCube from './ExMyCube'
import ExGeometryCube from './ExGeometryCube'
import ExGeometryDynamic from './ExGeometryDynamic'
import ExMorphtargetsHorse from './ExMorphtargetsHorse'
import ExSpaceFighter from './ExSpaceFighter'


// todo: THREE.FirstPersonControls
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_dynamic.html
export default class Example extends Component {

  constructor (...args) {
    super(...args)

    this.rendererSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  render () {
    return (<Renderer size={this.rendererSize}>
      <Scene>
        {/* <FirstPersonControls position={{ z: 15 }}>
          <AudioListener />
          <Camera />
        </FirstPersonControls> */}
        <OrbitControls position={{ z: 30 }}>
          <AudioListener />
          <Camera />
        </OrbitControls>
        <Light hex={0xefefff} intensity={2} position={{ x: 50, y: 50, z: 50 }}/>
        <Light hex={0xffefef} intensity={2} position={{ x: -50, y: -50, z: -50 }}/>
        <ExMyCube position={{ y: -5 }} />
        <ExGeometryCube position={{ x: 7, y: 4 }} />
        <ExMorphtargetsHorse position={{ x: -7, y: 2 }} />
        <ExGeometryDynamic position={{ y: -200 }} />
        <ExSpaceFighter position={{ y: 10 }} />
      </Scene>
    </Renderer>)
  }
}
