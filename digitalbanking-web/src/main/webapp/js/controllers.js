'use strict';

/* Controllers */
var digitalbankingControllers = angular.module('digitalbankingControllers', []);

digitalbankingControllers.controller('LoginController', [ '$scope', 
		function($scope) {
			$scope.var1 = "Test scope";
			console.log("In LoginController");
		} ]);
