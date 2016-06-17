/*'use strict';
const http = require('http'), 
			fs = require('fs');
var plantilla = '';
http.createServer(function(req, res) {
	/*res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("Hola Mundo test - Nginx Prueba 1");
	res.end();
	res.writeHead(200, {'Content-Type': 'text/html'});
	switch(req.url) {
		case '/':
			plantilla = "index.html";
			break;
		case '/nodejs':
			plantilla = "sobrenode.html";
			break;
		default:
			plantilla = "404.html";
			break;
	}

	fs.readFile("./views/"+plantilla, function(error, data) {
		res.write(data);
		res.end();
	});

}).listen(3000, 'localhost');

console.log('Servidor escuchando en http://locahost:3000');*/