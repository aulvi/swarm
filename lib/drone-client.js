// Decorate the ar-drone object with a socket.io connection

var io = require( "socket.io-client" ),
	util = require( "util" ),
	events = require( "events" );

var Client = function( ip ) {
	var self = this;

	self.socket = io.connect( "http://" + ip + ":3030" );

	self.send = function( cmd ) {
		self.socket.emit( "cmd", cmd );
	};

	self.socket.on( "connect", function(){
		console.log( "Client onnected to " + ip );

		self.socket.on( "data", function(data){
			self.emit( "data", data);
		});
	});
};

util.inherits(Client, events.EventEmitter);
module.exports = Client;
