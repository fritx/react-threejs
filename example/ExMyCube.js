
import React from 'react'
import { Object3D } from '../src'
import MyCube from './MyCube'


// extened threejs cube-rotating example
// http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene
export default class ExMyCube extends Object3D {

  constructor (...args) {
    super(...args)
    this.animate = ::this.animate

    this.state = {
      rotation: { x: 0, y: 0 },
    }
  }

  componentDidMount (...args) {
    super.componentDidMount(...args)
    this.animate()
  }

  // custom/example animation
  // rotating the cube
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
    const { rotation } = this.state
    return (<MyCube color={0x00ff00} rotation={rotation}>
      <MyCube color={0xff0000} position={{ y: 2 }} />
      <MyCube color={0xffff00} position={{ z: 3 }} />
    </MyCube>)
  }
}
