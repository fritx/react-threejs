
import React, { Component } from 'react'
import { Renderer, Camera, Scene } from '../src'
import MyCube from './MyCube'


export default class Example extends Component {

  constructor (...args) {
    console.log('Example construct')
    super(...args)
    this.animate = this.animate.bind(this)

    this.state = {
      rendererSize: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      cameraPosition: { x: 0, y: 0, z: 5 },
      position: { x: 0, y: 0 },
      rotation: { x: 0, y: 0 },
    }
  }

  componentDidMount () {
    console.log('Example didMount')
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
    // console.log('Example render')
    const { rendererSize, cameraPosition, position, rotation } = this.state
    return (<div>
      <Renderer size={rendererSize}>
        <Camera position={cameraPosition} />
        <Scene>
          <MyCube color={0x00ff00} position={position} rotation={rotation}>
            <MyCube color={0xff0000} position={{ y: 2 }} />
            <MyCube color={0x0000ff} position={{ z: 3 }} />
          </MyCube>
        </Scene>
      </Renderer>
    </div>)
  }
}
