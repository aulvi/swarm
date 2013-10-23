var
	client = require( "./lib/drone-client" ),
	drone = client("127.0.0.1")
;

setInterval( function(){
	console.log("Takeoff!");
	drone.send( [ "takeoff", 0.2 ] );
}, 2000 );
