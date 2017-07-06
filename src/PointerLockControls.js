import { PropTypes } from 'react'
import * as THREE from 'three'
import _PointerLockControls from '../threex/controls/PointerLockControls'
import Object3D from './Object3D'

export default class PointerLockControls extends Object3D {

  static contextTypes = {
    ...Object3D.contextTypes,
    domElement: PropTypes.object.isRequired,
  };

  static propTypes = {
    onPointerChange: PropTypes.func, // optional
  };

  constructor (...args) {
    super(...args)
    this.animate = ::this.animate
    this.domClicked = ::this.domClicked
    this.requestFullscreen = ::this.requestFullscreen
    this.pointerChanged = ::this.pointerChanged
    this.fullscreenChanged = ::this.fullscreenChanged

    this.frame = null
    this.locked = false
  }

  // override
  componentDidMount (...args) {
    super.componentDidMount(...args)
    this.controls = new _PointerLockControls(this.obj)
    this.timer = new THREE.Clock()
    this.animate()

    document.addEventListener('pointerlockchange', this.pointerChanged, false)
    document.addEventListener('webkitpointerlockchange', this.pointerChanged, false)
    document.addEventListener('mozpointerlockchange', this.pointerChanged, false)
    document.addEventListener('fullscreenchange', this.fullscreenChanged, false)
    document.addEventListener('webkitfullscreenchange', this.fullscreenChanged, false)
    document.addEventListener('mozfullscreenchange', this.fullscreenChanged, false)
    this.context.domElement.addEventListener('click', this.domClicked)
  }

  // override
  componentWillUnmount (...args) {
    cancelAnimationFrame(this.frame)
    this.controls.dispose()
    // this.controls = null
    super.componentWillUnmount(...args)

    document.removeEventListener('pointerlockchange', this.pointerChanged, false)
    document.removeEventListener('webkitpointerlockchange', this.pointerChanged, false)
    document.removeEventListener('mozpointerlockchange', this.pointerChanged, false)
    document.removeEventListener('fullscreenchange', this.fullscreenChanged, false)
    document.removeEventListener('webkitfullscreenchange', this.fullscreenChanged, false)
    document.removeEventListener('mozfullscreenchange', this.fullscreenChanged, false)
    this.context.domElement.removeEventListener('click', this.domClicked)

    // https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
    document.exitPointerLock = document.exitPointerLock ||
      document.webkitExitPointerLock ||
      document.mozExitPointerLock
    document.exitPointerLock()
    // https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
    document.exitFullscreen = document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.mozExitFullscreen
    document.exitFullscreen()
  }

  animate () {
    this.frame = requestAnimationFrame(this.animate)
    this.controls.update(this.timer.getDelta())
  }

  domClicked () {
    this.requestFullscreen()
  }
  requestFullscreen () {
    const elem = this.context.domElement
    elem.requestFullscreen = elem.requestFullscreen ||
      elem.requestFullScreen ||
      elem.webkitRequestFullscreen ||
      elem.webkitRequestFullScreen ||
      elem.mozRequestFullscreen ||
      elem.mozRequestFullScreen // Older API upper case 'S'.
    elem.requestFullscreen()
  }

  fullscreenChanged () {
    const elem = document.fullscreenElement ||
      document.fullScreenElement ||
      document.webkitFullscreenElement ||
      document.webkitFullScreenElement ||
      document.mozFullscreenElement ||
      document.mozFullScreenElement
    if (elem === this.context.domElement) {
      elem.requestPointerLock = elem.requestPointerLock ||
        elem.webkitRequestPointerLock ||
        elem.mozRequestPointerLock
      elem.requestPointerLock()
    }
  }

  pointerChanged () {
    this.locked = (document.pointerLockElement ||
      document.webkitPointerLockElement ||
      document.mozPointerLockElement) === this.context.domElement
    this.controls.enabled = this.locked

    const { onPointerChange } = this.props
    if (onPointerChange) onPointerChange(this.locked)
  }
}
