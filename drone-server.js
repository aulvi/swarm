var server = require( "./lib/drone-server" );

server.on("cmd", function(data){
	console.log("Drone will: " + data[0] + "(" + data[1] + ")");
});
