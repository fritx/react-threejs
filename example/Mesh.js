import React, { Component, PropTypes } from 'react'
import THREE from 'three.js'


export default class Mesh extends Component {

  static propTypes = {
    rotation: PropTypes.object,
  };

  constructor () {
    console.log('mesh construct')
    super()
  }

  componentDidMount () {
    console.log('mesh mount')

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = this.cube = new THREE.Mesh(geometry, material)

    window.scene.add(cube)
  }

  componentWillUnmount () {
    console.log('mesh unmount')
  }

  componentDidUpdate () {
    console.log('mesh update')
    const { cube } = this
    const { rotation } = this.props
    cube.rotation.x = rotation.x
    cube.rotation.y = rotation.y
  }

  render () {
    return <div></div>
  }
}
