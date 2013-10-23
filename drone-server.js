var server = require( "./lib/drone-server" );
var arDroner = require ( "./lib/ardroner" );
var mockDrone = require( "./test/mocks/mock.ar-drone" );
var drone = new arDroner("127.0.0.1", mockDrone);

server.on("cmd", function(data){
	console.log( "Drone will: " + data[0] + "(" + data[1] + ")" );
	drone.send( data );
});
