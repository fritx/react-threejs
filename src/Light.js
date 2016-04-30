import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Light extends Object3D {

  static propTypes = {
    hex: PropTypes.number,
    obj: PropTypes.object,
  }

  constructor (props, ...rest) {
    super(props, ...rest)
    this.obj = props.obj || new THREE.Light(props.hex)
  }
}
