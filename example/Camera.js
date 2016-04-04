/* global __r3js */
import THREE from 'three'
import Object3D from './Object3D'


export default class Camera extends Object3D {

  // static propTypes = {
  //   ...Object3D.propTypes,
  // };

  constructor (props, context) {
    console.log('Camera construct')
    super(props, context)

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  }

  componentWillMount () {
    console.log('Camera willMount')
    __r3js.camera = this.camera
  }
}
