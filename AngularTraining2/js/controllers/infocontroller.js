(function() {
	'use strict';
	
	angular
		.module('MyApp')
		.controller('InfoCtrl', InfoCtrl);
		
		InfoCtrl.$inject = ['$scope'];
		function InfoCtrl($scope) {
			$scope.title = "Info Page";
		}
})();