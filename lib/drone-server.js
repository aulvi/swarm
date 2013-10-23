var io = require( "socket.io" ),
	util = require( "util" ),
	events = require( "events" );

var Server = function(){
	var self = this;

	self.socket = io.listen( 3030 );

	self.socket.on( "connection", function( socket ){
		console.log( "Server connected!" );

		socket.on( "cmd", function( data ){
			console.log( "Data received! " + JSON.stringify( data ) );
			self.emit( "cmd", data );
		});
	});
};

util.inherits(Server, events.EventEmitter);
module.exports = new Server();


// Hide for now
		/*
		serial.on( "data", function(data){
			console.log("Serial says: " + data);
			socket.emit( "data", data);
		});
		*/
