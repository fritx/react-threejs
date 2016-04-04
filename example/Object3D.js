
import { PropTypes } from 'react'
import Base from './Base'


// https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js
export default class Object3D extends Base {

  static propTypes = {
    position: PropTypes.object,
    rotation: PropTypes.object,
  };

  componentDidMount () {
    this.update()
  }

  componentDidUpdate () {
    this.update()
  }

  // updating position & rotation
  update () {
    const { position, rotation } = this.props
    Object.assign(this.camera.position, position)
    Object.assign(this.camera.rotation, rotation)
  }
}
