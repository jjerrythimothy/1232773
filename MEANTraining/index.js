var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function(req, res) {
	fs.readFile("users.json", function callBack(err, data) {
	if(err)
		res.send(err.toString());
	else
		res.send(data.toString());
	});
});

app.get('/name/:id', function(req, res) {
	fs.readFile("users.json", function callBack(err, data) {
	if(err)
		res.send(err.toString());
	else
		res.send(data.toString());
	});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/profile', upload.array(), function (req, res, next) {
  
  fs.readFile("users.json", function callBack(err, data) {
	if(err)
		console.log(err.toString());
	else {
		var config = JSON.parse(data.toString());
		config.push(req.body);
		var configJSON = JSON.stringify(config);
		fs.writeFile('users.json', configJSON, (err) => {
		  if (err) throw err;
		  console.log('It\'s saved!');
		});
	}
	});
  
  //console.log(req.body);
  res.json(req.body);
});

app.listen(process.env.PORT || 8080);