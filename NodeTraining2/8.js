	var http = require('http');
	var collectData = "";
	http.get(process.argv[2], function(response){
		response.on("data", function(data) {
			collectData += data.toString();
		});
		
		response.on("end", function(end) {
			console.log(collectData.length);
			console.log(collectData);
		});
	});