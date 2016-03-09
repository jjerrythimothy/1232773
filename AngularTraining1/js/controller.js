(function() {
	'use strict';
	
	angular
		.module('MyApp')
		.controller('HomeCtrl', HomeCtrl);
		
		HomeCtrl.$inject = ['$scope'];
		function HomeCtrl($scope) {
			$scope.title = "Hello";
			$scope.description = function() {
				return "This is a description";
			}
		}
})();