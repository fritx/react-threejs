import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Mesh extends Object3D {

  static propTypes = {
    geometry: PropTypes.object,
    material: PropTypes.object,
  };

  constructor (props, ...rest) {
    super(props, ...rest)
    this.obj = new THREE.Mesh(props.geometry, props.material) // placeholder
  }
}
