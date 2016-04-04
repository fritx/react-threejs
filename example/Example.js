
import React, { Component } from 'react'
import Renderer from './Renderer'
import Camera from './Camera'
import Scene from './Scene'
import MyCube from './MyCube'


export default class Example extends Component {

  constructor (...args) {
    console.log('Example construct')
    super(...args)
    this.animate = this.animate.bind(this)

    this.state = {
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
    const { cameraPosition, position, rotation } = this.state
    return (<div>
      <Renderer>
        <Camera position={cameraPosition} />
        <Scene>
          <MyCube position={position} rotation={rotation} />
        </Scene>
      </Renderer>
    </div>)
  }
}
