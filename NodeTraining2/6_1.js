module.exports = function(pathToFile, filterExt) {
	var fs = require('fs');
	var path = require('path');
	var dirRead = fs.readdir(pathToFile, function callBack(err, list) {
		if(err)
			console.log(err);
		else {
			for(var ictr = 0; ictr < list.length; ictr++) {
				if(path.extname(list[ictr]) === "." + filterExt)
					console.log(list[ictr]);
			}
		}
	});
}