/* global __r3js */
import THREE from 'three'
import Base from './Base'


export default class Renderer extends Base {

  constructor (...args) {
    console.log('Renderer construct')
    super(...args)
    this.animate = this.animate.bind(this)
    window.__r3js = {} // singleton

    const renderer = this.renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  componentDidMount () {
    console.log('Renderer didMount')
    document.body.appendChild(this.renderer.domElement) // fixme
    this.animate()
  }

  componentWillUnmount () {
    // temperately not considering Renderer being unmounted
    // it is singleton & dominating
  }

  // rendering scene with camera
  animate () {
    requestAnimationFrame(this.animate)
    this.renderer.render(__r3js.scene, __r3js.camera)
  }
}
