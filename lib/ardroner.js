var arDrone = require( "ar-drone"),
	util = require( "util" ),
	events = require( "events" ),
	serial = require( "./serial" );

var ARdroner = function( ip, ardrone ) {
	var self = this,
		spaceAvg = 0,
		ignoreCmds = false;
		
	serial.connect();
		
	self.goForward = false;

	if (ardrone) { arDrone = ardrone; }
	
	console.log("IP is: " + ip);
	self.drone = arDrone.createClient({ip:ip});
	
	self.send = function( command ){
		if (!command || command.length === 0)
			return;

		var action = command[0];
			speed = command[1] || 0;

		// If we are too close to a wall, stop us from going forwards again.
		if ( action === "forward" && self.goForward ) {
			return;
		}

		// Prevent command processing during collision avoidance, unless it's "land".
		if ( self.ignoreCmds && action != "land" ) {
			return;
		}

		try {
			self.drone[action](speed);
		} catch (err) {
			console.log("ERROR! " + err);
		}
	};

	self.leapBack = function(){
		console.log("Leaping back!");
		self.drone.back(0.3);
		setTimeout(function(){
			self.drone.back(0);
			self.checkIfClear();
		}, 1000);
	};
	
	self.checkIfClear = function(){
		if (spaceAvg >= 20) {
			console.log("Cleared!");
			self.goForward = true;
			self.ignoreCommands = false;
		} else {
			setTimeout(self.checkIfClear, 500);
		}
	};

	// Listen for data from the Arduino.
	serial.on( "data", function(data){
		console.log("data: " + data);
		
		if (!parseInt(data) || data < 0 || data > 200) {
			return;
		}
		
		spaceAvg = parseInt(Math.round((spaceAvg + parseInt(data)) / 2));
		
//		console.log("avg is: " + spaceAvg);
	//	console.log("fwd? " + self.goForward);
		
		if ( spaceAvg <= 20 && self.goForward ) {
			console.log("Too close!");
			self.goForward = false;
			self.ignoreCommands = true;
			self.leapBack();
		}
	});
};

util.inherits( ARdroner, events.EventEmitter );
module.exports = ARdroner;
