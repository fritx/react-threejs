
import React, { Component } from 'react'
// import { Renderer, Camera, Scene } from '../dist'
import { Renderer, Camera, Scene } from '../src'
import ExMyCube from './ExMyCube'
import ExGeometryCube from './ExGeometryCube'


// todo: THREE.FirstPersonControls
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_dynamic.html
export default class Example extends Component {

  constructor (...args) {
    console.log('Example construct')
    super(...args)

    this.rendererSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  render () {
    return (<Renderer size={this.rendererSize}>
      <Camera position={{ z: 15 }} />
      <Scene>
        <ExMyCube />
        <ExGeometryCube position={{ x: 8 }} />
      </Scene>
    </Renderer>)
  }
}
