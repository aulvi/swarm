var 
	keypress = require( "keypress" ),
	swarm = require( "./lib/swarm" )(),
	util = require( "util" ),
	speed = .3
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

process.stdin.on( "keypress", function(ch,key){

	if ( key.name === "w" ) {
		swarm.front( speed );
	}

	if ( key.name === "a" ) {
		swarm.left( speed );
	}

	if ( key.name === "s" ) {
		swarm.back( speed );
	}

	if ( key.name === "d" ) {
		swarm.right( speed );
	}

	if ( key.name === "up" ) {
		swarm.up( speed );
	}

	if ( key.name === "down" ) {
		swarm.down( speed );
	}

	if ( key.name === "escape" ) {
		swarm.takeoff();
	}

	if ( key.name === "space" ) {
		swarm.land();
	}

	if ( key.name === "q" ) {
		console.log( "Goodbye!" );
		process.exit(0);
	}

});


keypress( process.stdin );

