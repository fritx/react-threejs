import React, { PropTypes } from 'react'
import * as THREE from 'three'
import Stats from 'stats.js'
import Base from './Base'


export default class Renderer extends Base {

  static childContextTypes = {
    setCamera: PropTypes.func.isRequired,
    setScene: PropTypes.func.isRequired,
    getSize: PropTypes.func.isRequired,
    domElement: PropTypes.object.isRequired,
    audioListener: PropTypes.object.isRequired,
  };

  getChildContext () {
    return {
      setCamera: ::this.setCamera,
      setScene: ::this.setScene,
      getSize: ::this.obj.getSize,
      domElement: this.obj.domElement,
      audioListener: this.audioListener,
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
    obj: PropTypes.object,
  };

  constructor (props, ...rest) {
    super(props, ...rest)
    this.animate = ::this.animate
    this.audioListener = new THREE.AudioListener()
    this.stats = new Stats()

    this.obj = props.obj || new THREE.WebGLRenderer({
      antialias: true,
    })
    this.obj.name = this.obj.name || this.constructor.name
    this.obj.setSize(props.size.width, props.size.height)
    this.obj.setClearColor(0x000000)
  }

  componentDidMount () {
    this.refs.container.appendChild(this.obj.domElement) // fixme
    this.refs.container.appendChild(this.stats.dom)
    this.animate()
  }

  componentDidUpdate (prevProps) {
    const { size } = this.props
    if (size.width !== prevProps.size.width ||
        size.height !== prevProps.size.height) { // dimension changed
      this.obj.setSize(size.width, size.height)
      if (this.camera) {
        this.camera.aspect = size.width / size.height
        this.camera.updateProjectionMatrix()
      }
    }
  }

  componentWillUnmount () {
    // temperately not considering Renderer being unmounted
    // it is singleton & dominating
  }

  // rendering scene with camera
  animate () {
    requestAnimationFrame(this.animate)
    this.obj.render(this.scene, this.camera)
    this.stats.update()
  }

  render () {
    return (<div>
      <div ref="container"></div>
      <div hidden>{this.props.children}</div>
    </div>)
  }
}
