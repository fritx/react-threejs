import THREE from 'three'
import Mesh from './Mesh'


export default class MyCube extends Mesh {

  constructor (...args) {
    console.log('MyCube construct')
    super(...args)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.mesh = new THREE.Mesh(geometry, material)
  }
}
