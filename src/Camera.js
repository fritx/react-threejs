import { PropTypes } from 'react'
import * as THREE from 'three'
import Object3D from './Object3D'


export default class Camera extends Object3D {

  static contextTypes = {
    ...Object3D.contextTypes, // fixme: other places
    setCamera: PropTypes.func.isRequired,
    getSize: PropTypes.func.isRequired,
  };

  constructor (props, context) {
    super(props, context)
    const { width, height } = context.getSize()
    this.obj = props.obj || new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    this.obj.name = this.obj.name || this.constructor.name
    context.setCamera(this.obj)
  }
}
