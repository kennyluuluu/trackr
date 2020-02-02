var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require("express");
var app = express();


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
httpServer.listen(8080);
httpsServer.listen(443);

var numPeople = 0;

app.get("/url", (req, res, next) => {
	numPeople += 1
 res.json({'number_people': numPeople});
});

