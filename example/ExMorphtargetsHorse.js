
import React from 'react'
import * as THREE from 'three'
import { Mesh, Object3D } from '../src'


// http://threejs.org/examples/#canvas_morphtargets_horse
export default class ExMorphtargetsHorse extends Object3D {

  constructor (...args) {
    super(...args)
    this.animate = ::this.animate

    this.state = {
      mesh: null,
      rotation: { y: 0 },
    }

    this.prevTime = Date.now()
  }

  componentWillMount () {
    new THREE.JSONLoader().load('./horse.js', (geometry) => {
      // const material = new THREE.MeshNormalMaterial({
      //   vertexColors: THREE.FaceColors,
      //   morphTargets: true,
      //   overdraw: 0.5,
      // })
      const material = new THREE.MeshLambertMaterial( {
        vertexColors: THREE.FaceColors,
        morphTargets: true,
        overdraw: 0.5,
      });

      const mesh = new THREE.Mesh(geometry, material)
      mesh.name = 'Horse'
      mesh.scale.set( 0.2, 0.2, 0.2 )

      const mixer = this.mixer = new THREE.AnimationMixer(mesh);
      var clip = THREE.AnimationClip.CreateFromMorphTargetSequence( 'gallop', geometry.morphTargets, 30 );
      mixer.clipAction( clip ).setDuration( 1 ).play();

      this.setState({ mesh })
    })
  }

  componentDidMount (...args) {
    super.componentDidMount(...args)
    this.animate()
  }

  animate () {
    requestAnimationFrame(this.animate)
    const { rotation } = this.state
    this.setState({
      rotation: {
        y: rotation.y + 0.01,
      },
    })

    if ( this.mixer ) {
      var time = Date.now();
      this.mixer.update( ( time - this.prevTime ) * 0.001 );
      this.prevTime = time;
    }
  }

  render () {
    const { mesh, rotation } = this.state
    return (
      mesh && <Mesh obj={mesh} rotation={rotation} />
    )
  }
}
