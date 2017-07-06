
import React from 'react'
import * as THREE from 'three'
import { Mesh, Object3D, PositionalAudio } from '../src'


// http://threejs.org/examples/#webgl_geometry_cube
export default class ExGeometryCube extends Object3D {

  constructor (...args) {
    super(...args)
    this.animate = ::this.animate

    this.geometry = new THREE.BoxBufferGeometry(2, 2, 2)
    this.material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(require('./crate.gif')),
    })

    this.state = {
      rotation: { x: 0, y: 0 },
    }
  }

  componentDidMount (...args) {
    super.componentDidMount(...args)
    this.animate()
  }

  animate () {
    requestAnimationFrame(this.animate)
    const { rotation } = this.state
    this.setState({
      rotation: {
        x: rotation.x + 0.1,
        y: rotation.y + 0.1,
      },
    })
  }

  render () {
    const { geometry, material } = this
    const { rotation } = this.state
    return (
      <Mesh rotation={rotation} geometry={geometry} material={material}>
        <PositionalAudio url="Project_Utopia.ogg" />
      </Mesh>
    )
  }
}
