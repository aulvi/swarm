// Decorate the ar-drone object with a socket.io connection

var io = require( "socket.io-client" );

module.exports = function( drone ) {
	drone.socket = io.connect( "http://" + drone._options.ip + ":3030" );
	drone.goForward = true;
	drone._front = drone.front;
	drone.front = function( speed ) {
		if ( drone.goForward ) {
			drone._front( speed );
		}
	};

	drone.socket.on( "connect", function(){
		console.log( "Connected to " + drone._options.ip );

		drone.socket.on( "data", function(data){
			console.log("Data! " + data);

			if ( data > 80 ) {
				console.log("Over 80");

				drone.goForward = false;
				drone.back(0.1);
				setTimeout(function(){
					console.log("Jump back!");
					drone.back(0);
				}, 500);
			}
		});
	});

	console.log(drone.socket);

	return drone;
};
