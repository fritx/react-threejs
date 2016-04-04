
import React, { Component } from 'react'
import Renderer from './Renderer'
import Camera from './Camera'
import Scene from './Scene'


export default class Example extends Component {

  constructor () {
    console.log('Example construct')
    super()

    this.state = {
      cameraPosition: { z: 5 },
      cameraRotation: { y: 0 },
    }
  }

  componentDidMount () {
    console.log('Example didMount')

    const animate = () => {
      requestAnimationFrame(animate)
      const { cameraPosition, cameraRotation } = this.state
      this.setState({
        cameraPosition: { z: cameraPosition.z + 0.05 },
        cameraRotation: { y: cameraRotation.y + (Math.random() < 0.5 ? 0.005 : -0.005) },
      })
    }
    animate()
  }

  render () {
    console.log('Example render')
    const { cameraPosition, cameraRotation } = this.state
    return (<div>
      <Renderer>
        <Camera position={cameraPosition} rotation={cameraRotation} />
        <Scene />
      </Renderer>
    </div>)
  }
}
