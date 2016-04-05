import { PropTypes } from 'react'
import Object3D from './Object3D'


// experimental: DisplayObject is not in official Three.js
// objects that display in (being added/removed to) the scene
export default class DisplayObject extends Object3D {

  static contextTypes = {
    scene: PropTypes.object,
  };

  componentDidMount () {
    this.context.scene.add(this.obj)
  }

  componentWillUnmount () {
    this.context.scene.remove(this.obj)
  }
}
