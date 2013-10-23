var server = require( "./lib/drone-server" );

server.on("cmd", function(data){
	console.log("CMD received: " + data);
});
