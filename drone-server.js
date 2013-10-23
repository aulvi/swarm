var 
	io = require( "socket.io" ).listen( 3030 ),
	serial = require( "./lib/serial" ),
	drone = require( "./lib/drone" )
;

serial.connect();

io.sockets.on( "connection", function( socket ){
	console.log( "Server connected!" );

	socket.on( "cmd", function( data ){
		console.log( "Data received! " + JSON.stringify( data ) );
	});

	// Hide for now
	/*
	serial.on( "data", function(data){
		console.log("Serial says: " + data);
		socket.emit( "data", data);
	});
	*/
});

