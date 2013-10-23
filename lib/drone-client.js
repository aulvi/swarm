// Decorate the ar-drone object with a socket.io connection

var io = require( "socket.io-client" );

module.exports = function( ip ) {
	var drone = {};
	drone.socket = io.connect( "http://" + ip + ":3030" );
	drone.send =  function( cmd ) {
		drone.socket.emit( "cmd", cmd );
	};

	drone.socket.on( "connect", function(){
		console.log( "Connected to " + ip );

		drone.socket.on( "data", function(data){
			console.log("Data! " + data);
		});
	});

	return drone;
};
			/*
			if ( data > 80 && drone.goForward === true ) {
				drone.goForward = false;
				drone.back(0.1);
				setTimeout(function(){
					drone.back(0);
				}, 500);
			}
			*/

