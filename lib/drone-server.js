var io = require( "socket.io" ),
	util = require( "util" ),
	events = require( "events" );

var Server = function(){
	var self = this;

	self.socket = io.listen( 3030 );

	self.socket.on( "connection", function( socket ){
		console.log( "Server connected!" );

		socket.on( "cmd", function( data ){
			self.emit( "cmd", data );

			socket.emit( "data", "OK" );
		});
	});
};

util.inherits(Server, events.EventEmitter);
module.exports = new Server();
