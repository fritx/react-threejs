
import React, { Component } from 'react'
// import { Renderer, Camera, Scene } from '../lib'
import {
  Renderer, Camera, Scene, Light,
  AudioListener,
  OrbitControls,
  PointerLockControls,
  FirstPersonControls,
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

    this.state = {
      dimension: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      controls: 0,
    }
  }

  componentDidMount () {
    window.addEventListener('resize', () => {
      this.setState({
        dimension: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      })
    })

    window.addEventListener('keydown', ({ altKey }) => {
      if (altKey) this.switchControls()
    })
  }

  switchControls () {
    this.setState({
      controls: (++this.state.controls) % 3,
    })
  }

  render () {
    const { dimension, controls } = this.state
    return (<Renderer size={dimension}>
      <Scene>
        {do {
          if (controls === 0) {
            (<OrbitControls position={{ x: 9, y: 21, z: 20 }} rotation={{ x: 2, y: 0, z: 3 }}>
              <AudioListener />
              <Camera />
            </OrbitControls>)
          } else if (controls === 1) {
            (<FirstPersonControls position={{ z: 15 }}>
              <AudioListener />
              <Camera />
            </FirstPersonControls>)
          } else if (controls === 2) {
            (<PointerLockControls position={{ y: 10, z: 15 }}>
              <AudioListener />
              <Camera />
            </PointerLockControls>)
          }
        }}
        <Light hex={0xefefff} intensity={2} position={{ x: 50, y: 50, z: 50 }} />
        <Light hex={0xffefef} intensity={2} position={{ x: -50, y: -50, z: -50 }} />
        <ExMyCube position={{ y: -5 }} />
        <ExGeometryCube position={{ x: 7, y: 4 }} />
        <ExMorphtargetsHorse position={{ x: -7, y: 2 }} />
        <ExGeometryDynamic position={{ y: -200 }} />
        <ExSpaceFighter position={{ y: 10 }} />
      </Scene>
    </Renderer>)
  }
}
