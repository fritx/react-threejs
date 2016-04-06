import React, { PropTypes } from 'react'
import THREE from 'three'
import { Base, Mesh } from '../src'


export default class MyCube extends Base {

  static propTypes = {
    position: PropTypes.object,
    rotation: PropTypes.object,
    color: PropTypes.number.isRequired,
  };

  constructor (props, context) {
    console.log('MyCube construct')
    super(props, context)

    // extend custom geometry & material
    this.geometry = new THREE.BoxGeometry(1, 1, 1)
    this.material = new THREE.MeshBasicMaterial({ color: props.color })
  }

  render () {
    const meshProps = {
      position: this.props.position,
      rotation: this.props.rotation,
      geometry: this.geometry,
      material: this.material,
    }
    return (<div>
      <Mesh {...meshProps}>{this.props.children}</Mesh>
    </div>)
  }
}
