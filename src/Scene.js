import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Scene extends Object3D {

  static contextTypes = {
    setScene: PropTypes.func.isRequired,
  };

  constructor (...args) {
    console.log('Scene construct')
    super(...args)
    this.obj = new THREE.Scene()
    this.context.setScene(this.obj)
  }
}
