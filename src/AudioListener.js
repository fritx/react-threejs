import { PropTypes } from 'react'
import Object3D from './Object3D'


export default class AudioListener extends Object3D {

  static contextTypes = {
    ...Object3D.contextTypes,
    audioListener: PropTypes.object.isRequired,
  }

  constructor (props, context) {
    super(props, context)
    this.obj = context.audioListener
    this.obj.name = this.obj.name || this.constructor.name
  }
}
