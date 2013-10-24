var
	client = require( "./lib/drone-client" ),
	drone = new client("127.0.0.1")
;

setInterval( function(){
	drone.send( [ "takeoff", 0.2 ] );
}, 2000 );

drone.on( "data", function(data){
	console.log( "Client received: " + data );
});
