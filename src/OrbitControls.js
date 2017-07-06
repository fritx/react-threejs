import React, { PropTypes } from 'react'
import * as THREE from 'three'
import _OrbitControls from '../threex/controls/OrbitControls'
import Object3D from './Object3D'

export default class OrbitControls extends Object3D {

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
    this.controls = new _OrbitControls(this.obj, domElement)
    // this.controls.target.set(0, 0, 100)

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

  // very weird, a PI-y needed for orbit controls
  render () {
    return (<Object3D rotation={{ y: Math.PI }}>
      {this.props.children}
    </Object3D>)
  }
}
