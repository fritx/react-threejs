import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Camera extends Object3D {

  static contextTypes = {
    setCamera: PropTypes.func.isRequired,
  };

  constructor (...args) {
    console.log('Camera construct')
    super(...args)

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.context.setCamera(this.camera)
    this.obj = this.camera
  }
}
