/* global __r3js */
import THREE from 'three'
import Object3D from './Object3D'


export default class Camera extends Object3D {

  constructor (...args) {
    console.log('Camera construct')
    super(...args)

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.obj = this.camera
  }

  componentWillMount () {
    console.log('Camera willMount')
    __r3js.camera = this.camera
  }
}
