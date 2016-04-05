import { PropTypes } from 'react'
import THREE from 'three'
import DisplayObject from './DisplayObject'


export default class Mesh extends DisplayObject {

  static propTypes = {
    ...DisplayObject.propTypes,
    geometry: PropTypes.object,
    material: PropTypes.object,
  };

  constructor (props, ...rest) {
    console.log('Mesh construct')
    super(props, ...rest)
    this.obj = new THREE.Mesh(props.geometry, props.material) // placeholder
  }
}
