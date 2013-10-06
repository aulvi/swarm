;(function($){
	var socket = io.connect("http://192.168.1.105:8080");
	socket.on("news", function (data) {
		console.log(data);
		socket.emit("my other event", { my: "data" });
	});

	socket.on("connect", function (data) {
		$("#top").html("Connected");
	});

	// accel
	var sensitivity = 1;

	window.addEventListener("deviceorientation", onOrientation, true);

	gyro.startTracking(onOrientation);

	function onOrientation(event) {

		var movement = 10;
		var accX = Math.round(event.accelerationIncludingGravity.x*10) / 10;  
		var accY = Math.round(event.accelerationIncludingGravity.y*10) / 10;  
		var accZ = Math.round(event.accelerationIncludingGravity.z*10) / 10;  
				
		xA = -(accX / 10) * movement;
		yA = -(accY / 10) * movement;
		zA = -(accZ / 10) * movement;

		$("#x").html(xA);
		$("#y").html(yA);
		$("#z").html(zA);
	}

}(jQuery));
