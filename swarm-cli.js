var 
	keypress = require( "keypress" ),
	swarm = require( "./lib/swarm" )(),
	speed = { step: 5, min: -100, max: 100 }
;

// Add a couple of drones
swarm.add({ip: "192.168.1.50"});
swarm.add({ip: "192.168.1.51"});

// Add some state
swarm.x = 0;
swarm.y = 0;
swarm.z = 0;
swarm.a = 0;

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

process.stdin.on( "keypress", onKeypress);

function onKeypress(ch,key){

	// Cancel setInterval
	// (This is used to resend some commands as a fail-safe).

	// Forward / Backward
	if ( key.name === "w" ) {
		if (swarm.y != speed.max)
			swarm.y += speed.step; 
	}
	if ( key.name === "s" ) {
		if (swarm.y != speed.min)
			swarm.y -= speed.step; 
	}

	// Left / Right
	if ( key.name === "a" ) {
		if (swarm.x != speed.max)
			swarm.x += speed.step; 
	}
	if ( key.name === "d" ) {
		if (swarm.x != speed.min)
			swarm.x -= speed.step; 
	}

	// Up / Down
	if ( key.name === "up" ) {
		if (swarm.z != speed.max)
			swarm.z += speed.step; 
	}
	if ( key.name === "down" ) {
		if (swarm.z != speed.min)
			swarm.z -= speed.step; 
	}

	// Spin Clockwise / Counterclockwise
	if ( key.name === "left" ) {
		if (swarm.a != speed.max)
			swarm.a -= speed.step; 
	}
	if ( key.name === "right" ) {
		if (swarm.a != speed.min)
			swarm.a -= speed.step; 
	}

	// Takeoff
	if ( key.name === "escape" ) {
		swarm.takeoff();
		return;
	}

	// Land
	if ( key.name === "space" ) {
		swarm.z = 0; 
		swarm.land();
		return;
	}

	// TODO - Land before closing.
	if ( key.name === "q" ) {
		console.log( "Goodbye!" );
		process.exit(0);
	}

	// TODO - Check to see if any cmds require periodic retransmits, schedule them accordingly.
	sendAll();
}

function sendAll() {
	// X - Left / Right
	if ( swarm.x >= 0 ) {
		swarm.left( swarm.x / speed.max );
	}
	if (swarm.x <= 0  ) {
		swarm.right( swarm.x / -speed.max);
	}
	// Y - Front / Back
	if ( swarm.y >= 0 ) {
		swarm.front( swarm.y / speed.max );
	}
	if (swarm.y <= 0  ) {
		swarm.back( swarm.y / -speed.max);
	}
	// Z - Up / Down
	if ( swarm.z >= 0 ) {
		swarm.up( swarm.z / speed.max );
	}
	if (swarm.z <= 0  ) {
		swarm.down( swarm.z / -speed.max);
	}
	// A - Clockwise / Counter-clockwise
	if ( swarm.a >= 0 ) {
		swarm.clockwise( swarm.a / speed.max );
	}
	if (swarm.a <= 0  ) {
		swarm.counterClockwise( swarm.a / -speed.max);
	}
}

// Let's rock!
keypress( process.stdin );

