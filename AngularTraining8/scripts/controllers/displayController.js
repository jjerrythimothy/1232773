(function() {
	'use strict';
	
	angular
		.module('myApp')
		.controller('displayCtrl', displayCtrl);
		
		displayCtrl.$inject = ['$scope', 'userService'];
		function displayCtrl($scope, userService) {
			
			$scope.$on('handleBroadcast', function() {
				$scope.currentUser = userService.user;
			});
			
		}
})();