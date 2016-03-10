var fs = require('fs');
var path = require('path');
var dirRead = fs.readdir(process.argv[2], function callBack(err, list) {
	if(err)
		console.log(err);
	else {
		for(var ictr = 0; ictr < list.length; ictr++) {
			if(path.extname(list[ictr]) === "." + process.argv[3])
				console.log(list[ictr]);
		}
	}
});