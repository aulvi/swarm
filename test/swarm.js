var
	expect = require('chai').expect,
	arDrone = require('./mocks/mock.ar-drone'),
	swarm = require('../lib/swarm')(arDrone)
;

suite("lib/swarm", function() {
	test("Init", function(){
		expect(swarm.state()).to.be.an('array');
	});

	test("add", function(){
		swarm.add({ip: "192.168.1.50"});
		expect(swarm.state().length).to.equal(1);
	});
	
	test("takeoff", function(){
		swarm.takeoff(function(err){
			expect(err).to.be.null;
		});
	});
});
