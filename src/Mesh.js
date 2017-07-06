import { PropTypes } from 'react'
import * as THREE from 'three'
import Object3D from './Object3D'


export default class Mesh extends Object3D {

  static propTypes = {
    ...Object3D.propTypes,
    geometry: PropTypes.object,
    material: PropTypes.object,
    obj: PropTypes.object,
  };

  constructor (props, ...rest) {
    super(props, ...rest)
    this.obj = props.obj || new THREE.Mesh(props.geometry, props.material)
    this.obj.name = this.obj.name || this.constructor.name
  }
}
