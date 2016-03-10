var fs = require('fs');
fs.readFile(process.argv[2], function callBack(err, data) {
	if(err)
		console.log(err);
	else {
		var str = data.toString();
		var noOfLines = str.split('\n').length - 1;
		console.log(noOfLines);
	}
});