/* Mock client */
mockDrone = {
	createClient: function(options) {
		return {
			options: options,
			front: function() { console.log( "[Mock] front" ); },
			back: function() { console.log( "[Mock] back" ); },
			left: function() { console.log( "[Mock] left" ); },
			right: function() { console.log( "[Mock] right" ); },
			takeoff: function() { console.log( "[Mock] takeoff" ); },
			land: function() { console.log( "[Mock] land" ); },
			up: function() { console.log( "[Mock] up" ); },
			down: function() { console.log( "[Mock] down" ); }
		};
	}
};

module.exports = mockDrone;
