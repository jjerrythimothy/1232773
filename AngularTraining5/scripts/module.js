(function() {
	'use strict';
	
	angular
		.module('TCSApp', ['ui.router'])
		.config(router);
		
		router.$inject = ['$stateProvider', '$urlRouterProvider']
		function router($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise('/home');
			
			$stateProvider
			
			.state('home', {
				url: '/home',
				templateUrl: './views/home.html'
			})
			
			.state('profile', {
				url: '/profile',
				templateUrl: './views/profile.html'
			})
			
			.state('lists', {
				url: '/lists',
				templateUrl: './views/lists.html'
			})
			
			.state('about', {
				url: '/about',
				templateUrl: './views/about.html'
			})
			
			.state('search', {
				url: '/search',
				templateUrl: './views/search.html'
			});
		}
})();