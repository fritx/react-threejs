
import React, { Component } from 'react'
import THREE from 'three'
// import { Renderer, Camera, Scene } from '../lib'
import { Renderer, Camera, Scene, Light } from '../src'
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

    const light1 = new THREE.DirectionalLight( 0xefefff, 1.5 )
    light1.position.set( 10, 10, 10 ).normalize();
    this.light1 = light1
    const light2 = new THREE.DirectionalLight( 0xffefef, 1.5 )
    light2.position.set( -10, -10, -10 ).normalize();
    this.light2 = light2
  }

  render () {
    return (<Renderer size={this.rendererSize}>
      <Camera position={{ z: 15 }} />
      <Scene>
        <Light obj={this.light1}/>
        <Light obj={this.light2}/>
        <ExMyCube position={{ y: -5 }} />
        <ExGeometryCube position={{ x: 7, y: 4 }} />
        <ExMorphtargetsHorse position={{ x: -7, y: 2 }} />
        <ExGeometryDynamic position={{ y: -200 }} />
      </Scene>
    </Renderer>)
  }
}
