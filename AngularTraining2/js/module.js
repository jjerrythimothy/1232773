(function() {
	'use strict';
	
	angular
		.module('MyApp', ['ngRoute'])
		.config(router);
		
		router.$inject = ['$routeProvider']
		function router($routeProvider) {
			$routeProvider.when('/', {
				controller: 'HomeCtrl',
				templateUrl: './views/home.html'
			})
			
			$routeProvider.when('/info', {
				controller: 'InfoCtrl',
				templateUrl: './views/info.html'
			})
		}
})();