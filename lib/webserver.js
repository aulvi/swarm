// webserver.js
// Simple restify server

var restify = require('restify')
	, sio = require('socket.io')
	, fs = require('fs')
;

module.exports = function() { 

	var server = restify.createServer();
	var io = sio.listen(server);

	io.sockets.on('connection', function (socket) {
		console.log("Socket connected!");

		socket.emit('news', { hello: 'world' });
		socket.on('my other event', function (data) {
				console.log(data);
		});
	});

	server.get('/', function indexHTML(req, res, next) {
		fs.readFile(__dirname + '/../public/index.html', function (err, data) {
			if (err) {
				next(err);
				return;
			}

			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(data);
			next();
		});
	});

	server.get(/\/?.*/, restify.serveStatic({
		directory:'./public'
	}));

	server.listen(8080, function () {
		console.log('Swarm webserver listening at %s', server.url);
	});

};
