import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Camera extends Object3D {

  static contextTypes = {
    setCamera: PropTypes.func.isRequired,
    getSize: PropTypes.func.isRequired,
  };

  constructor (props, context) {
    console.log('Camera construct')
    super(props, context)
    // this.obj = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const { width, height } = context.getSize()
    this.obj = props.obj || new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    context.setCamera(this.obj)
  }
}
