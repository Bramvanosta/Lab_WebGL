// $('.story').find('button').on('click', function() {
// 	earth.add(camera);
// 	camera.position.z = -10;
// 	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
// })

$('.story').find('button').on('click', function() {

	camera.setTarget( 'Jupiter' );

})