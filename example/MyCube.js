import React, { PropTypes } from 'react'
import * as THREE from 'three'
import { Mesh } from '../src'


export default class MyCube extends Mesh {

  static propTypes = {
    color: PropTypes.number.isRequired,
  };

  constructor (props, ...rest) {
    // extend custom geometry & material
    // fixed: Warning: MyCube(...): When calling super() in `MyCube`,
    // make sure to pass up the same props that your component's constructor was passed.
    // props = {
    //   ...props,
    //   geometry: new THREE.BoxGeometry(1, 1, 1),
    //   material: new THREE.MeshBasicMaterial({ color: props.color }),
    // }
    super(props, ...rest)
    this.geometry = new THREE.BoxGeometry(1, 1, 1)
    this.material = new THREE.MeshBasicMaterial({ color: props.color })
  }

  render () {
    const { geometry, material } = this
    return (
      <Mesh geometry={geometry} material={material}>
        {this.props.children}
      </Mesh>
    )
  }
}
