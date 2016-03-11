(function() {
	'use strict';
	
	angular
		.module('myApp', ['ngRoute'])
		.config(router);
		
		router.$inject = ['$routeProvider']
		function router($routeProvider) {
			$routeProvider
			
			.when('/', {
				
				templateUrl: './views/home.html'
			})
			
			.otherwise({
				redirectTo: '/'
			});
		}
})();