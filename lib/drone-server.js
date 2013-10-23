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
		});

		socket.on( "disconnect", function(data){
			self.emit( "disconnect", data);
		});
	});

	self.send = function( data ){
		self.socket.emit( "data", data );
	};
};

util.inherits(Server, events.EventEmitter);
module.exports = new Server();
