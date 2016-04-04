/* global __r3js */
import React, { Component, PropTypes } from 'react'
import THREE from 'three.js'


export default class Renderer extends Component {

  static propTypes = {
    // https://github.com/reactjs/react-tabs/blob/master/lib%2Fhelpers%2FchildrenPropType.js
    children: PropTypes.array,
  };

  constructor () {
    console.log('Renderer construct')
    super()
    window.__r3js = {} // 要求单例

    const renderer = this.renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  componentDidMount () {
    console.log('Renderer didMount')
    document.body.appendChild(this.renderer.domElement) // fixme

    const animate = () => {
      requestAnimationFrame(animate)
      const { camera, scene } = __r3js
      this.renderer.render(scene, camera)
    }
    animate()
  }

  render () {
    console.log('Renderer render')
    return (<div>
      {this.props.children}
    </div>)
  }
}
