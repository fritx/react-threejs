/* global __r3js */
import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Mesh extends Object3D {

  static propTypes = {
    ...Object3D.propTypes,
    position: PropTypes.object,
    rotation: PropTypes.object,
  };

  constructor (...args) {
    console.log('Mesh construct')
    super(...args)
    this.mesh = new THREE.Mesh() // placeholder
  }

  componentDidMount () {
    console.log('Mesh didMount')
    __r3js.scene.add(this.mesh)
  }

  componentWillUnmount () {
    console.log('Mesh willUnmount')
    __r3js.scene.remove(this.mesh)
  }

  componentDidUpdate () {
    // console.log('Mesh didUpdate')
    const { position, rotation } = this.props
    Object.assign(this.mesh.position, position)
    Object.assign(this.mesh.rotation, rotation)
  }
}
