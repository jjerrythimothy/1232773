(function() {
	'use strict';
	
	angular
		.module('myApp')
		.controller('listCtrl', listCtrl);
		
		listCtrl.$inject = ['$scope','$http', '$rootScope', 'userService'];
		function listCtrl($scope, $http, $rootScope, userService) {
			
			$http
				.get('/users')
				.success(function(data) {
					$scope.users = data;
				})
				.error(function(data) {
					console.log(data);
				});
				
			$scope.setUser = function(user) {
				userService.user = user;
				$rootScope.$broadcast('handleBroadcast');
			}
			
			$http
				.post('/profile', { test: 'test' })
				.success(function(data) {
					console.log(data);
				})
				.error(function(data) {
					console.log(data);
				});
			
		}
})();