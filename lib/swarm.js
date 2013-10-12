var arDrone = require('ar-drone');

var swarm = function() {
	var state = {
			registry: []
		},

		register = function(drone) {
			registry.push(arDrone.createClient(drone));
		},
		
		remove = function(drone) {
			registry.slice(1,drone);
		},

		takeoff = function(cb) {
			registry.map(function(drone){
				console.log(drone);
				//drone.takeoff();
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

		animate = function(animation, value, cb) {
		}
	;

	return {
		register: register,
		remove: remove,
		move: move,
		animate: animate
	};
};

module.exports = swarm();
