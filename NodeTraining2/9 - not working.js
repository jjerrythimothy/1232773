	var http = require('http');
	var ictr = 2;
	var collectData = [];
	collectData[0] = "";
	collectData[1] = "";
	
	function printResponse(url) {
		
		http.get(url, function(response){
			
		response.on("data", function(data) {
			collectData[ictr] += data.toString();
		});
		
		response.on("end", function(end) {
			
			if(process.argv[++ictr])
				printResponse(process.argv[++ictr]);
			else {
				for(var jctr = 2; jctr < collectData.length; jctr++) {
					console.log(collectData[jctr]);
				}
			}
		});
	});
	}
	
	printResponse(process.argv[ictr]);