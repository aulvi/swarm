var 
	EventEmitter = require( "events" ).EventEmitter,
	util = require( "util" ),
	serialport = require( "serialport" ),
	sp = new serialport.SerialPort( "/dev/ttyO3", { 
		parser: serialport.parsers.raw,
		baud: 9600
	})
;

var serial = function(){
	var self = this;

	function connect() {
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
	}

	connect();
};

util.inherits(serial, EventEmitter);

module.exports = serial();
