// $('.story').find('button').on('click', function() {
// 	earth.add(camera);
// 	camera.position.z = -10;
// 	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
// })

var writeText = function (message, index) {   
  $(".text-box p").append(message[index++]);
    setTimeout(function () { writeText(message, index); }, 100);
}

$('.story').find('button').on('click', function() {

	camera.setTarget( 'Mars' );
	$(".text-box p").html("");
	writeText("Hello, World!", 0);

})