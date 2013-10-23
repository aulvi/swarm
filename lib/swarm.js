var client = require( "./drone-client" );

var Swarm = function() {

	var self = this;

	self.registry = [];
	self.counter = 0;

	self.state = function(){
		return self.registry.slice(0);
	};

	self.add = function(drone) {
		self.registry[self.counter] = new client(drone);
		return self.counter++;
	};
	
	self.remove = function( drone ) {
		self.registry.splice( drone, 1 );
		return self.registry.slice();
	};

	self.send = function( command, cb ){
		self.registry.map(function(drone){
			drone.send( command );
		});

		if (cb) { cb(null); }
	};
	
};

module.exports = Swarm;
