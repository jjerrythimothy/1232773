(function() {
	'use strict';
	
	angular
		.module('myApp')
		.controller('listCtrl', listCtrl);
		
		listCtrl.$inject = ['$scope','$http', '$rootScope', 'userService'];
		function listCtrl($scope, $http, $rootScope, userService) {
			
			$http
				.get('./users.json')
				.success(function(data) {
					$scope.users = data;
				})
				.error(function(data) {
					console.log(err);
				});
				
			$scope.setUser = function(user) {
				userService.user = user;
				$rootScope.$broadcast('handleBroadcast');
			}
			
		}
})();