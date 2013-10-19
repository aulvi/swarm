var 
	keypress = require( "keypress" ),
	swarm = require( "./lib/swarm" )(),
	util = require( "util" ),
	speed.step = 5,
	speed.min = -100,
	speed.max = 100, 
	swarmState = { x: 50, y: 50, z: 50, a: 50 }
;

// Add a couple of drones
swarm.add({ip: "192.168.1.50"});
swarm.add({ip: "192.168.1.51"});

// Yo, how's this work?
console.log( "" );
console.log( "              CONTROLS " );
console.log( "" );
console.log( "       [ esc ]       takeoff" );
console.log( "       [ space ]        land" );
console.log( "       [ q ]            quit" );
console.log( "        wasd / up / down as expected" );
console.log( "" );

process.stdin.setRawMode( true );
process.stdin.resume();

function sendAll() {
	// X - Front / Back
	if ( swarmState.x >= 1 ) {
		swarm.front( swarmState.x / speed.max );
	}
	if (swarmState.x <= 0  ) {
		swarm.back( swarmState.x / -speed.max);
	}
	// Y
	if ( swarmState.y >= 1 ) {
		swarm.front( swarmState.y / speed.max );
	}
	if (swarmState.y <= 0  ) {
		swarm.back( swarmState.y / -speed.max);
	}
	// Z
	if ( swarmState.z >= 1 ) {
		swarm.front( swarmState.z / speed.max );
	}
	if (swarmState.z <= 0  ) {
		swarm.back( swarmState.z / -speed.max);
	}
	// A
	if ( swarmState.a >= 1 ) {
		swarm.front( swarmState.a / speed.max );
	}
	if (swarmState.a <= 0  ) {
		swarm.back( swarmState.a / -speed.max);
	}
}

process.stdin.on( "keypress", function(ch,key){

	// Cancel setInterval
	// (This is used to resend some commands as a fail-safe).

	// Forward / Backward
	if ( key.name === "w" ) {
		swarmstate.y += speedStep; 
	}
	if ( key.name === "s" ) {
		swarmstate.y -= speedStep; 
	}

	// Left / Right
	if ( key.name === "a" ) {
		swarmstate.x += speedStep; 
		swarm.left( speed );
	}
	if ( key.name === "d" ) {
		swarmstate.x -= speedStep; 
		swarm.right( speed );
	}

	// Up / Down
	if ( key.name === "up" ) {
		swarmstate.z += speedStep; 
		swarm.up( swarmState.z / 100 );
	}

	if ( key.name === "down" ) {
		swarmstate.z -= speedStep; 
		swarm.down( swarmState.z / 100 );
	}

	// Spin Clockwise / Counterclockwise
	if ( key.name === "left" ) {
		swarmstate.a -= speedStep; 
		swarm.down( swarmState.a / 100 );
	}

	if ( key.name === "right" ) {
		swarmstate.a -= speedStep; 
		swarm.down( swarmState.a / 100 );
	}

	if ( key.name === "escape" ) {
		swarm.takeoff();
	}

	if ( key.name === "space" ) {
		swarmstate.z += 0; 
		swarm.land();
	}

	// TODO - Land before closing.
	if ( key.name === "q" ) {
		console.log( "Goodbye!" );
		process.exit(0);
	}

	sendAll();

});


keypress( process.stdin );

