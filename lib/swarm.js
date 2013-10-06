var arDrone = require('ar-drone');

var swarm = function() {
	var state = {
			registry: []
		},

		register = function(drone) {
			registry.push(arDrone.createClient(drone));
		},
		
		remove = function(drone) {
		},

		move = function(motion, value, cb) {
		},

		animate = function(animation, value, cb) {
		};

	return {
		register: register,
		remove: remove,
		move: move,
		animate: animate
	};
};

module.exports = swarm();
