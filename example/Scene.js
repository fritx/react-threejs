/* global __r3js */
import { PropTypes } from 'react'
import THREE from 'three'
import Base from './Base'


export default class Scene extends Base {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.bool,
    ]),
  };

  constructor (...args) {
    console.log('Scene construct')
    super(...args)
    this.scene = new THREE.Scene()
  }

  componentWillMount () {
    console.log('Scene willMount')
    __r3js.scene = this.scene
  }

  componentDidMount () {
    console.log('Scene didMount')
  }
}
