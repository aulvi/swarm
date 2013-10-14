var
	expect = require('chai').expect,
	arDrone = require('./mocks/mock.ar-drone'),
	swarm = require('../lib/swarm')(arDrone)
;

suite("lib/swarm", function() {
	test("Init", function(){
		expect(swarm.state()).to.be.an('array');
	});

	test("add-remove", function(){
		var drone1 = swarm.add({ip: "192.168.1.50"});
		var drone2 = swarm.add({ip: "192.168.1.51"});
		expect(swarm.state().length).to.equal(2);
		swarm.remove(drone2);
		expect(swarm.state().length).to.equal(1);
	});

	test("takeoff", function(){
		swarm.takeoff(function(err){
			expect(err).to.be.null;
		});
	});

	test("land", function(){
		swarm.land(function(err){
			expect(err).to.be.null;
		});
	});

	test("state", function(){
		var state = swarm.state();
		expect(state).to.be.array;
	});
});
