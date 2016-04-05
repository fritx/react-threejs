/* global __r3js */
import THREE from 'three'
import Object3D from './Object3D'


export default class Scene extends Object3D {

  constructor (...args) {
    console.log('Scene construct')
    super(...args)
    this.scene = new THREE.Scene()
  }

  componentWillMount () {
    console.log('Scene willMount')
    __r3js.scene = this.scene
  }

  componentDidMount () {
    console.log('Scene didMount')
  }
}
