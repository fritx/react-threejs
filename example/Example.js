
import React, { Component } from 'react'
// import { Renderer, Camera, Scene } from '../lib'
import { Renderer, Camera, Scene, Light, FirstPersonControls } from '../src'
import ExMyCube from './ExMyCube'
import ExGeometryCube from './ExGeometryCube'
import ExGeometryDynamic from './ExGeometryDynamic'
import ExMorphtargetsHorse from './ExMorphtargetsHorse'


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
      <Scene>
        <FirstPersonControls position={{ z: 15 }}>
          <Camera />
        </FirstPersonControls>
        <Light hex={0xefefff} intensity={1.5} position={{ x: 10, y: 10, z: 10 }}/>
        <Light hex={0xffefef} intensity={1.5} position={{ x: -10, y: -10, z: -10 }}/>
        <ExMyCube position={{ y: -5 }} />
        <ExGeometryCube position={{ x: 7, y: 4 }} />
        <ExMorphtargetsHorse position={{ x: -7, y: 2 }} />
        <ExGeometryDynamic position={{ y: -200 }} />
      </Scene>
    </Renderer>)
  }
}
