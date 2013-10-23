var
	libdrone = require( "./lib/drone" ),
	arDrone = require( "ar-drone" ),
	drone = libdrone(arDrone.createClient({ip:"192.168.1.50"}))
;

drone.socket.on("connect", function(){
	console.log("Client connected!");

	drone.socket.on("data", function(data){
		console.log("DRONE data is: " + JSON.stringify(data));
	});
});

