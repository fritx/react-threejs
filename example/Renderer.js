
import React, { Component } from 'react'
import THREE from 'three.js'
import Scene from './Scene'


export default class Renderer extends Component {

  constructor () {
    console.log('Renderer construct')
    super()

    window.scene = this.scene = new THREE.Scene()
    const camera = this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = this.renderer = new THREE.WebGLRenderer()

    camera.position.z = 5
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  componentDidMount () {
    console.log('Renderer mount')
    const { scene, camera, renderer } = this

    document.body.appendChild(renderer.domElement) // fixme

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()
  }

  render () {
    console.log('Renderer render')
    return (<div>
      <Scene />
    </div>)
  }
}
