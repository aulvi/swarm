var
	libdrone = require( "./lib/drone" ),
	arDrone = require( "ar-drone" ),
	drone = libdrone(arDrone.createClient({ip:"127.0.0.1"}))
;


drone.socket.on("connect", function(){
	console.log("Client connected!");

	drone.socket.emit("data", { msg: "Beep beep" });

	drone.socket.on("data", function(data){
		console.log("DRONE data is: " + JSON.stringify(data));
	});
});

