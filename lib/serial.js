var 
	EventEmitter = require( "events" ).EventEmitter,
	util = require( "util" ),
	serialport = require( "node-serialport" ),
	sp = new serialport.SerialPort( "/dev/ttyO3", { 
		parser: serialport.parsers.raw,
		baud: 9600
	})
;

var serial = function(){ };

util.inherits(serial, EventEmitter);

serial.prototype.connect = function(){
	var self = this;
	try {
		sp.on( "data", function( chunk ){
			var data = chunk.toString();
			console.log( "Sending: " + data );
			self.emit( "data", data );
		});
	} catch (err) {
		console.log("Error! Failed to connect to serial");
		console.log(err);
		setTimeout(connect, 5000);
	}
};

module.exports = new serial();
