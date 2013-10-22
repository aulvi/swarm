var 
	serialport = require( 'node-serialport' ),
	io = require( 'socket.io' ).listen( 1337 )
;
 
var sp = new serialport.SerialPort("/dev/ttyO3", { 
  parser: serialport.parsers.raw,
  baud: 9600
});

io.sockets.on('connection', function (socket) {
	console.log("Server connected!");

	socket.on('cmd', function (data) {
		console.log("Data received! " + JSON.stringify(data));
	});

	sp.on('data', function(chunk) {
		var data = chunk.toString();
		console.log("Sending: " + data);
		socket.emit('data', data);

		// console.log(chunk.toString('hex'), ), chunk);
	});

});

