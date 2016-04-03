
import React, { Component } from 'react'
import Mesh from './Mesh'


export default class Scene extends Component {

  constructor () {
    console.log('Scene construct')
    super()
    this.state = {
      rotation: { x: 0, y: 0 },
    }
  }

  componentDidMount () {
    console.log('Scene mount')

    const animate1 = () => {
      requestAnimationFrame(animate1)
      const { rotation } = this.state
      this.setState({
        rotation: {
          x: rotation.x + 0.1,
          y: rotation.y + 0.1,
        },
      })
    }
    animate1()
  }

  render () {
    console.log('Scene render')
    const { rotation } = this.state
    return (<div>
      <Mesh rotation={rotation} />
    </div>)
  }
}
