var arDrone = require( "ar-drone"),
	util = require( "util" ),
	events = require( "events" );

var ARdroner = function( ip, ardrone ) {
	var self = this;

	if (ardrone) { arDrone = ardrone; }
	
	console.log("IP is: " + ip);
	self.drone = arDrone.createClient({ip:ip});
	
	self.send = function( command ){
		if (!command || command.length === 0)
			return;

		var action = command[0];
			speed = command[1] || 0;

		try {
			console.log("Calling " + action + "(" + speed + ")");
			
			self.drone[action](speed);
		} catch (err) {
			console.log("ERROR! " + err);
		}
	};
};

util.inherits( ARdroner, events.EventEmitter );
module.exports = ARdroner;
