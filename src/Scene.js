import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Scene extends Object3D {

  static contextTypes = {
    setScene: PropTypes.func.isRequired,
  };

  static propTypes = {
    obj: PropTypes.object,
  };

  constructor (props, context) {
    super(props, context)
    this.obj = props.obj || new THREE.Scene()
    context.setScene(this.obj)
  }
}
