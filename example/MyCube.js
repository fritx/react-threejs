import THREE from 'three'
import Mesh from './Mesh'


export default class MyCube extends Mesh {

  constructor (props, ...rest) {
    console.log('MyCube construct')

    // extend custom geometry & material
    props = {
      ...props,
      geometry: new THREE.BoxGeometry(1, 1, 1),
      material: new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    }

    super(props, ...rest)
  }
}
