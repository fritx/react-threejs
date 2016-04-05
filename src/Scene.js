import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Scene extends Object3D {

  static contextTypes = {
    setScene: PropTypes.func.isRequired,
  };

  static childContextTypes = {
    scene: PropTypes.object,
  };

  getChildContext () {
    return {
      scene: this.scene,
    }
  }

  constructor (...args) {
    console.log('Scene construct')
    super(...args)
    this.scene = new THREE.Scene()
    this.context.setScene(this.scene)
  }
}
