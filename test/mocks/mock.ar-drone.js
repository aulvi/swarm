/* Mock client */
mockDrone = {
	createClient: function(options) {
		return {
			options: options,
			takeoff: function() { console.log( "[Mock] takeoff" ); },
			land: function() { console.log( "[Mock] land" ); },
			up: function(speed) { console.log( "[Mock] up: " + speed ); },
			down: function(speed) { console.log( "[Mock] down: " + speed ); },
			left: function(speed) { console.log( "[Mock] left: " + speed ); },
			right: function(speed) { console.log( "[Mock] right: " + speed ); },
			front: function(speed) { console.log( "[Mock] front: " + speed ); },
			back: function(speed) { console.log( "[Mock] back: " + speed ); },
			clockwise: function(speed) { console.log( "[Mock] clockwise: " + speed ); },
			counterClockwise: function(speed) { console.log( "[Mock] counterClockwise: " + speed ); },
			stop: function() { console.log( "[Mock] stop" ); },
			animateLeds: function(data){ console.log( "[Mock] Animate: " + data ); }
		};
	}
};

module.exports = mockDrone;
