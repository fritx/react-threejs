/* eslint-disable */
import * as THREE from 'three'

// https://github.com/fritx/spacewar
// https://github.com/nkm/three-pointerlock
// https://github.com/mrdoob/three.js/blob/master/examples/js/controls/PointerLockControls.js
/**
 * @author mrdoob / http://mrdoob.com/
 */

export default function PointerLockControls ( object ) {

  var scope = this;

  // camera.rotation.set( 0, 0, 0 );

  // var pitchObject = new THREE.Object3D();
  // pitchObject.add( camera );

  // var yawObject = new THREE.Object3D();
  // yawObject.position.y = 10;
  // yawObject.add( pitchObject );

  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;

  var isOnObject = false;
  var canJump = false;

  var prevTime = performance.now();

  var velocity = new THREE.Vector3();

  var PI_2 = Math.PI / 2;

  this.lon = 0
  this.lat = 0
  this.toLook = new THREE.Vector3(0, 0, -1)
  object.lookAt(
    object.position.clone().sub(this.toLook.normalize())
  )

  var onMouseMove = ( event ) => {

    if ( scope.enabled === false ) return;

    var dx = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
    var dy = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

    // object.rotation.y -= movementX * 0.002;
    // object.rotation.x -= movementY * 0.002;
    // object.rotation.x = Math.max( - PI_2, Math.min( PI_2, object.rotation.x ) );

    this.lon += dx * 0.1;
    this.lat += dy * 0.1; // * World.windowRatio
    this.lat = Math.max( - 89, Math.min( 89, this.lat ) );
    var phi = THREE.Math.degToRad( 90 - this.lat );
    var theta = -THREE.Math.degToRad( this.lon );

    this.toLook.set(
      - Math.sin( phi ) * Math.sin( theta ),
      - Math.cos( phi ),
      - Math.sin( phi ) * Math.cos( theta ),
    );
    object.lookAt(
      object.position.clone().sub(this.toLook.normalize())
    )

  };

  var onKeyDown = function ( event ) {

    switch ( event.keyCode ) {

      case 38: // up
      case 87: // w
        moveForward = true;
        break;

      case 37: // left
      case 65: // a
        moveLeft = true;
        break;

      case 40: // down
      case 83: // s
        moveBackward = true;
        break;

      case 39: // right
      case 68: // d
        moveRight = true;
        break;

      // case 32: // space
      //   if ( canJump === true ) velocity.y += 350;
      //   canJump = false;
      //   break;

    }

  };

  var onKeyUp = function ( event ) {

    switch( event.keyCode ) {

      case 38: // up
      case 87: // w
        moveForward = false;
        break;

      case 37: // left
      case 65: // a
        moveLeft = false;
        break;

      case 40: // down
      case 83: // s
        moveBackward = false;
        break;

      case 39: // right
      case 68: // d
        moveRight = false;
        break;

    }

  };

  this.dispose = function() {
    document.removeEventListener( 'mousemove', onMouseMove, false );
    document.removeEventListener( 'keydown', onKeyDown, false );
    document.removeEventListener( 'keyup', onKeyUp, false );
  };

  document.addEventListener( 'mousemove', onMouseMove, false );
  document.addEventListener( 'keydown', onKeyDown, false );
  document.addEventListener( 'keyup', onKeyUp, false );

  this.enabled = false;

  this.getObject = function () {

    return object;

  };

  this.isOnObject = function ( boolean ) {

    isOnObject = boolean;
    canJump = boolean;

  };

  // this.getDirection = function() {

  //   // assumes the camera itself is not rotated

  //   var direction = new THREE.Vector3( 0, 0, -1 );
  //   var rotation = new THREE.Euler( 0, 0, 0, "YXZ" );

  //   return function( v ) {

  //     rotation.set( object.rotation.x, object.rotation.y, 0 );

  //     v.copy( direction ).applyEuler( rotation );

  //     return v;

  //   };

  // }();

  this.update = function () {

    if ( scope.enabled === false ) return;

    var time = performance.now();
    var delta = ( time - prevTime ) / 1000;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    // velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    if ( moveForward ) velocity.z -= 400.0 * delta;
    if ( moveBackward ) velocity.z += 400.0 * delta;

    if ( moveLeft ) velocity.x -= 400.0 * delta;
    if ( moveRight ) velocity.x += 400.0 * delta;

    // if ( isOnObject === true ) {
    //   velocity.y = Math.max( 0, velocity.y );
    // }

    // object.translateX( velocity.x * delta );
    // object.translateY( velocity.y * delta );
    // object.translateZ( velocity.z * delta );
    object.translateX( velocity.x * delta );
    object.translateY( velocity.y * delta );
    object.translateZ( velocity.z * delta );

    // if ( object.position.y < 10 ) {

    //   velocity.y = 0;
    //   object.position.y = 10;

    //   canJump = true;
    // }

    prevTime = time;
  };
};
