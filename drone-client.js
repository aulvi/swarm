var
	io = require('socket.io-client'),
	socket = io.connect('http://192.168.1.50:1337')
;

socket.on("connect", function(){
	console.log("Client connected!");

	socket.emit("data", { msg: "Beep beep" });

	socket.on("data", function(data){
		console.log("DRONE data is: " + JSON.stringify(data));
	});
});

