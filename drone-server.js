var server = require( "./lib/drone-server" );
var arDroner = require ( "./lib/ardroner" );
var drone = new arDroner( "192.168.1.51" );

server.on("cmd", function(data){
	console.log( "Drone.send( " + data );
	drone.send( data );
});
