
const express = require('express');
const app = express();
var fs = require('fs');

app.get('/', function(req, res) {
    fs.readFile('./data/carOfTheWeek.json', 'utf8', function (err, data) {
	    if (err) throw err; 

	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    res.writeHead(200, { 'Content-Type': 'application/json' });
	    res.end(data);
	});

});

app.get('/makes', function(req, res) {
    fs.readFile('./data/makes.json', 'utf8', function (err, data) {
	    if (err) throw err; 

	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    res.writeHead(200, { 'Content-Type': 'application/json' });
	    res.end(data);
	});

});

app.get('/models', function(req, res) {
	
    fs.readFile('./data/models.json', 'utf8', function (err, data) {
	    
	    if (err) throw err; 

	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    res.writeHead(200, { 'Content-Type': 'application/json' });

	    var id = req.query.id;
	    var dataObj = JSON.parse(data);

	    var dataFilter = dataObj.filter( m => (m.makeId == id) );

	    res.end(JSON.stringify(dataFilter));

	});

});

app.get('/model', function(req, res) {
	
    fs.readFile('./data/models.json', 'utf8', function (err, data) {
	    
	    if (err) throw err; 

	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    res.writeHead(200, { 'Content-Type': 'application/json' });

	    var id = req.query.id;
	    var dataObj = JSON.parse(data);

	    var dataFilter = dataObj.filter( m => (m.id == id) );

	    res.end(JSON.stringify(dataFilter[0]));

	});

});

app.listen(9999, function() {
    console.log('Server listening on port 9999!');
});
