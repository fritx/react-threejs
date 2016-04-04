import { PropTypes } from 'react'
import THREE from 'three'
import Base from './Base'


// https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js
export default class Object3D extends Base {

  static propTypes = {
    ...Base.propTypes,
    position: PropTypes.object,
    rotation: PropTypes.object,
  };

  constructor (...args) {
    console.log('Object3D construct')
    super(...args)
    this.obj = new THREE.Object3D() // placeholder
  }

  componentDidMount () {
    console.log('Object3D didMount')
    this.update()
  }

  componentDidUpdate () {
    this.update()
  }

  // updating position & rotation
  update () {
    const { position, rotation } = this.props
    Object.assign(this.obj.position, position)
    Object.assign(this.obj.rotation, rotation)
  }
}
