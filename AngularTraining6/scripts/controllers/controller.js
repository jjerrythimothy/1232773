(function() {
	'use strict';
	
	angular
		.module('ColorsStates')
		.controller('ColorsStatesCtrl', ColorsStatesCtrl);
		
		ColorsStatesCtrl.$inject = ['$scope'];
		function ColorsStatesCtrl($scope) {
			
			var output = [];
			
			$scope.setColors = color;
			$scope.setStates = state;
			$scope.repearLi = repeatLi;
			
			function color() {
				output = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];;
			}
			
			function state() {
					output = ['Tamilnadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Madhya Pradesh', 'Bihar', 'Orissa'];;
			}
			
			function repeatLi() {
				return output;
			}
			
			output = $scope.setColors();
			$scope.setColors();
		}
})();