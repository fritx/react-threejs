import { PropTypes } from 'react'
import * as THREE from 'three'
import Object3D from './Object3D'


export default class PositionalAudio extends Object3D {

  static contextTypes = {
    ...Object3D.contextTypes,
    audioListener: PropTypes.object.isRequired,
  };

  static propTypes = {
    ...Object3D.propTypes,
    url: PropTypes.string.isRequired,
  };

  constructor (props, context) {
    super(props, context)
    const audio = this.obj = new THREE.PositionalAudio(context.audioListener)
    audio.name = audio.name || this.constructor.name

    // fixme: r76?
    // https://github.com/mrdoob/three.js/blob/master/examples/misc_sound.html
    // context.audioLoader.load(props.url, function (buffer) {
    // r75:
    audio.load(props.url)
    audio.autoplay = true
    audio.setLoop(true)
    audio.setVolume(0.5)
    audio.setRefDistance(10)
    // audio.setBuffer(buffer)
    // audio.play()
    // })
  }
}
