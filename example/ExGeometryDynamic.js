
import React from 'react'
import * as THREE from 'three'
import { Mesh, Object3D } from '../src'


// http://threejs.org/examples/#webgl_geometry_dynamic
export default class ExGeometryDynamic extends Object3D {

  constructor (...args) {
    super(...args)
    this.animate = ::this.animate

    this.clock = new THREE.Clock();

    const geometry = this.geometry = new THREE.PlaneGeometry( 10000, 10000, 40, 40 );
    geometry.rotateX( - Math.PI / 2 );
    for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {
      geometry.vertices[ i ].y = 10 * Math.sin( i / 2 );
    }

    const texture = new THREE.TextureLoader().load(require('./water.jpg'))
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 5, 5 );
    const material = new THREE.MeshBasicMaterial( { color: 0x0044ff, map: texture } );

    this.mesh = new THREE.Mesh( geometry, material );
    this.mesh.name = 'Water'
  }

  componentDidMount (...args) {
    super.componentDidMount(...args)
    this.animate()
  }

  animate () {
    requestAnimationFrame(this.animate)

    const time = this.clock.getElapsedTime() * 5;
    for ( var i = 0, l = this.geometry.vertices.length; i < l; i ++ ) {
      this.geometry.vertices[ i ].y = 10 * Math.sin( i / 5 + ( time + i ) / 7 );
    }
    this.mesh.geometry.verticesNeedUpdate = true;
  }

  render () {
    const { mesh } = this
    return (
      <Mesh obj={mesh} />
    )
  }
}
