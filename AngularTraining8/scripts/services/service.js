(function() {
	'use strict';
	
	angular
		.module('myApp')
		.factory('userService', userService);
		
		function userService () {
			var userService = {};
			return userService;
		}
})();