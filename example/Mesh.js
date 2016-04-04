/* global __r3js */
import React, { Component, PropTypes } from 'react'
import THREE from 'three.js'


export default class Mesh extends Component {

  static propTypes = {
    position: PropTypes.object,
    rotation: PropTypes.object,
  };

  constructor () {
    console.log('mesh construct')
    super()

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.cube = new THREE.Mesh(geometry, material)
  }

  componentDidMount () {
    console.log('mesh didMount')
    __r3js.scene.add(this.cube)
  }

  componentWillUnmount () {
    console.log('mesh willUnmount')
    __r3js.scene.remove(this.cube)
  }

  componentDidUpdate () {
    console.log('mesh didUpdate')
    const { position, rotation } = this.props
    Object.assign(this.cube.position, position)
    Object.assign(this.cube.rotation, rotation)
  }

  render () {
    return <div></div>
  }
}
