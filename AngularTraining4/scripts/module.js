(function() {
	'use strict';
	
	angular
		.module('TCSApp', ['ngRoute'])
		.config(router);
		
		router.$inject = ['$routeProvider']
		function router($routeProvider) {
			$routeProvider.when('/', {
				controller: 'HomeCtrl',
				templateUrl: './views/home.html'
			})
			
			$routeProvider.when('/profile', {
				controller: 'ProfileCtrl',
				templateUrl: './views/profile.html'
			})
			
			$routeProvider.when('/lists', {
				controller: 'ListsCtrl',
				templateUrl: './views/lists.html'
			})
			
			$routeProvider.when('/about', {
				controller: 'AboutCtrl',
				templateUrl: './views/about.html'
			})
			
			$routeProvider.when('/search', {
				controller: 'SearchCtrl',
				templateUrl: './views/search.html'
			})
		}
})();