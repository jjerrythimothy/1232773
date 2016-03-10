	var http = require('http');
	
	http.get(process.argv[2], function(response){
		
		response.on("error", function(error) {
			console.log(error.toString());
		});
		
		response.on("data", function(data) {
			console.log(data.toString());
		});
	});