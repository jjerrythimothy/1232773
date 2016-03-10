var fs = require("fs");
fs.readFile('users.json', function(err, buffer) {
	console.log(buffer.toString());
});