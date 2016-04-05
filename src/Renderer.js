import React, { PropTypes } from 'react'
import THREE from 'three'
import Base from './Base'


export default class Renderer extends Base {

  static childContextTypes = {
    setCamera: PropTypes.func.isRequired,
    setScene: PropTypes.func.isRequired,
  };

  getChildContext () {
    return {
      setCamera: this.setCamera,
      setScene: this.setScene,
    }
  }
  setCamera (camera) {
    this.camera = camera
  }
  setScene (scene) {
    this.scene = scene
  }

  static propTypes = {
    ...Base.propTypes,
    size: PropTypes.object.isRequired,
  };

  constructor (props, ...rest) {
    console.log('Renderer construct')
    super(props, ...rest)
    this.animate = this.animate.bind(this)
    this.setCamera = this.setCamera.bind(this)
    this.setScene = this.setScene.bind(this)

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(props.size.width, props.size.height)
  }

  componentDidMount () {
    this.refs.container.appendChild(this.renderer.domElement) // fixme
    this.animate()
  }

  componentWillUnmount () {
    // temperately not considering Renderer being unmounted
    // it is singleton & dominating
  }

  // rendering scene with camera
  animate () {
    requestAnimationFrame(this.animate)
    this.renderer.render(this.scene, this.camera)
  }

  render () {
    return (<div>
      <div ref="container"></div>
      <div hidden>{this.props.children}</div>
    </div>)
  }
}
