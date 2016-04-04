/* global __r3js */
import React, { Component } from 'react'
import THREE from 'three.js'
import Mesh from './Mesh'


export default class Scene extends Component {

  constructor () {
    console.log('Scene construct')
    super()
    this.scene = new THREE.Scene()

    this.state = {
      position: { x: 0, y: 0 },
      rotation: { x: 0, y: 0 },
    }
  }

  componentWillMount () {
    console.log('Scene willMount')
    __r3js.scene = this.scene
  }

  componentDidMount () {
    console.log('Scene didMount')

    const animate = () => {
      requestAnimationFrame(animate)
      const { rotation } = this.state
      this.setState({
        rotation: {
          x: rotation.x + 0.1,
          y: rotation.y + 0.1,
        },
      })
    }
    animate()

    window.addEventListener('keydown', (e) => {
      const { position } = this.state
      if (e.keyCode === 37) {
        this.setState({
          position: { x: position.x - 0.1, y: position.y },
        })
      } else if (e.keyCode === 39) {
        this.setState({
          position: { x: position.x + 0.1, y: position.y },
        })
      }
    })
  }

  render () {
    // console.log('Scene render')
    const { position, rotation } = this.state
    return (<div>
      {rotation.x > 100 || <Mesh position={position} rotation={rotation} />}
    </div>)
  }
}
