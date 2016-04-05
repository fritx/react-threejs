/* global __r3js */
import Object3D from './Object3D'


// experimental: DisplayObject is not in official Three.js
// objects that display in (being added/removed to) the scene
export default class DisplayObject extends Object3D {

  componentDidMount () {
    __r3js.scene.add(this.obj)
  }

  componentWillUnmount () {
    __r3js.scene.remove(this.obj)
  }
}
