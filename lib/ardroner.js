var arDrone = require( "ar-drone"),
	util = require( "util" ),
	events = require( "events" );

var ARdroner = function( ip, ardrone ) {
	var self = this;

	if (ardrone) { arDrone = ardrone; }
	self.drone = arDrone.createClient({ip:ip});

	self.send = function( command ){
		if (!command || command.length === 0)
			return;

		var action = command[0];
			speed = command[1] || 0;

		if ( self.drone.hasOwnProperty(action) ) {
			self.drone[action](speed);
		}
	};
};

util.inherits( ARdroner, events.EventEmitter );
module.exports = ARdroner;
