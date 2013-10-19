var arDrone = require('ar-drone');

var swarm = function(ardrone) {

	if (ardrone) { arDrone = ardrone; }

	var 
		registry = [],
		counter = 0,
		LED = ['blinkOrange', 'blinkGreen', 'blinkRed', 'green', 'blinkOrange'];

		state = function(){
			var retval = registry.slice(0);
			return retval;
		},

		add = function(drone) {
			registry[counter] = arDrone.createClient(drone);
			registry[counter].animateLeds(LED[counter]);
			return counter++;
		},
		
		remove = function(drone) {
			registry.splice(drone,1);
			return registry.slice();
		},

		takeoff = function(cb) {
			registry.map(function(drone){
				drone.takeoff();
			});

			if (cb) { cb(null); }
		},

		land = function(cb) {
			registry.map(function(drone){
				drone.land();
			});

			if (cb) { cb(null); }
		},

		up = function(speed, cb) {
			registry.map(function(drone){
				drone.up(speed);
			});

			if (cb) { cb(null); }
		},

		down = function(speed, cb) {
			registry.map(function(drone){
				drone.down(speed);
			});

			if (cb) { cb(null); }
		},

		left = function(speed, cb) {
			registry.map(function(drone){
				drone.left(speed);
			});

			if (cb) { cb(null); }
		},

		right = function(speed, cb) {
			registry.map(function(drone){
				drone.right(speed);
			});

			if (cb) { cb(null); }
		},

		front = function(speed, cb) {
			registry.map(function(drone){
				drone.front(speed);
			});

			if (cb) { cb(null); }
		},

		back = function(speed, cb) {
			registry.map(function(drone){
				drone.back(speed);
			});

			if (cb) { cb(null); }
		},

		clockwise = function(speed, cb) {
			registry.map(function(drone){
				drone.clockwise(speed);
			});

			if (cb) { cb(null); }
		},

		counterClockwise = function(speed, cb) {
			registry.map(function(drone){
				drone.counterClockwise(speed);
			});

			if (cb) { cb(null); }
		},


		stop = function(cb) {
			registry.map(function(drone){
				drone.stop();
			});

			if (cb) { cb(null); }
		}
	;

	return {
		state: state,
		add: add,
		remove: remove,
		takeoff: takeoff,
		land: land,
		up: up,
		down: down,
		left: left,
		right: right,
		front: front,
		back: back,
		clockwise: clockwise,
		counterClockwise: counterClockwise
	};
};

module.exports = swarm;
