import { PropTypes } from 'react'
import THREE from 'three'
import Base from './Base'


// https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js
export default class Object3D extends Base {

  static contextTypes = {
    parent: PropTypes.object,
  };

  static childContextTypes = {
    parent: PropTypes.object,
  };

  getChildContext () {
    return {
      parent: this.obj,
    }
  }

  static propTypes = {
    ...Base.propTypes,
    position: PropTypes.object,
    rotation: PropTypes.object,
  };

  constructor (...args) {
    super(...args)
    this.obj = new THREE.Object3D() // placeholder
  }

  componentDidMount () {
    this.update()
    if (this.context.parent) this.context.parent.add(this.obj)
  }

  componentDidUpdate () {
    this.update()
  }

  componentWillUnmount () {
    if (this.context.parent) this.context.parent.remove(this.obj)
  }

  // updating position & rotation
  update () {
    const { position, rotation } = this.props
    Object.assign(this.obj.position, position)
    Object.assign(this.obj.rotation, rotation)
  }
}
