import { PropTypes } from 'react'
import THREE from 'three'
import { Mesh } from '../src'


export default class MyCube extends Mesh {

  static propTypes = {
    color: PropTypes.number.isRequired,
  };

  constructor (props, ...rest) {
    console.log('MyCube construct')

    // extend custom geometry & material
    props = {
      ...props,
      geometry: new THREE.BoxGeometry(1, 1, 1),
      material: new THREE.MeshBasicMaterial({ color: props.color }),
    }

    super(props, ...rest)
  }
}
