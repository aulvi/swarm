var arDrone = require('ar-drone');

var i,
	drone,
	drones = [ 
				arDrone.createClient({ip: '192.168.1.50'}),
				arDrone.createClient({ip: '192.168.1.51'})
			];

function takeoff() {
	for (i = 0; i < drones.length; i++) {
		drones[i].takeoff();
	}
}

function land() {
	for (i = 0; i < drones.length; i++) {
		drones[i].land();
	}

	setTimeout(function() { land(); }, 3000);
}

takeoff();

setInterval(function(){ land(); }, 6000);
