
import React, { Component } from 'react'
import Renderer from './Renderer'


export default class Example extends Component {

  constructor () {
    console.log('Example construct')
    super()
  }

  componentDidMount () {
    console.log('Example mount')
  }

  render () {
    console.log('Example render')
    return (<div>
      <Renderer />
    </div>)
  }
}
