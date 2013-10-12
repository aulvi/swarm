var arDrone = require('ar-drone');

var swarm = function(ardrone) {

	if (ardrone) { arDrone = ardrone; }

	var 
		registry = [],
		counter = 0,

		add = function(drone) {
			registry[counter++] = arDrone.createClient(drone);
			return counter;
		},
		
		remove = function(drone) {
			registry.slice(1,drone);
		},

		takeoff = function(cb) {
			registry.map(function(drone){
				drone.takeoff();
			});

			if (cb) { cb(null); }
		},

		land = function(cb) {
			registry.map(function(drone){
				console.log(drone);
				//drone.takeoff();
			});

			if (cb) { cb(null); }
		},
		
		state = function(){
			var retval = registry.slice(0);
			return retval;
		}
	;

	return {
		add: add,
		remove: remove,
		takeoff: takeoff,
		land: land,
		state: state
	};
};

module.exports = swarm;
