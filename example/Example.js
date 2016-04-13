
import React, { Component } from 'react'
// import { Renderer, Camera, Scene } from '../dist'
import { Renderer, Camera, Scene } from '../src'
import ExMyCube from './ExMyCube'
import ExGeometryCube from './ExGeometryCube'


// extened threejs cube-rotating example
// http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene
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
