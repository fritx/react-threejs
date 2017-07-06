import { PropTypes } from 'react'
import * as THREE from 'three'
import _FirstPersonControls from '../threex/controls/FirstPersonControls'
import Object3D from './Object3D'

export default class FirstPersonControls extends Object3D {

  static contextTypes = {
    ...Object3D.contextTypes,
    domElement: PropTypes.object.isRequired,
  };

  constructor (...args) {
    super(...args)
    this.animate = ::this.animate
    this.frame = null
  }

  // override
  componentDidMount (...args) {
    super.componentDidMount(...args)
    const { domElement } = this.context
    const controls = this.controls =
      new _FirstPersonControls(this.obj, domElement)
    controls.movementSpeed = 20
    controls.lookSpeed = 0.1
    controls.noFly = true
    controls.lookVertical = true

    // hack: fixing controls.handleResize called before Renderer didMount
    // - while offsetWidth/offsetHeight eq 0
    // however, as a canvas, width/height just works
    controls.viewHalfX = domElement.width / 2
    controls.viewHalfY = domElement.height / 2

    this.timer = new THREE.Clock()
    this.animate()
  }

  // override
  componentWillUnmount (...args) {
    cancelAnimationFrame(this.frame)
    this.controls.dispose()
    // this.controls = null
    super.componentWillUnmount(...args)
  }

  animate () {
    this.frame = requestAnimationFrame(this.animate)
    this.controls.update(this.timer.getDelta())
  }
}
