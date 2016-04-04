/* global __r3js */
import React, { Component, PropTypes } from 'react'
import THREE from 'three.js'


export default class Camera extends Component {

  static propTypes = {
    position: PropTypes.object,
    rotation: PropTypes.object,
  };

  constructor () {
    console.log('Camera construct')
    super()

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  }

  componentWillMount () {
    console.log('Camera willMount')
    __r3js.camera = this.camera
  }

  componentDidUpdate () {
    console.log('Camera didUpdate')
    const { position, rotation } = this.props
    Object.assign(this.camera.position, position)
    Object.assign(this.camera.rotation, rotation)
  }

  render () {
    return <div></div>
  }
}
