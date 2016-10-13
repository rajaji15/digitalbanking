'use strict';

/* Services */
var digitalbankingServices = angular.module('digitalbankingServices', [ 'ngResource' ]);

digitalbankingServices.factory('LoginService',['$http','$location','$rootScope', function($http, $location, $rootScope) {
	var service = {};
	service.Login = function(username, password, tenant) {
		return $http.post($rootScope.WEBURL + 'webapi/security/authenticate', {
			username : username,
			password : password
		});
	};
	service.isLoggedIn = function() {		
		$http.defaults.headers.common.authToken = sessionStorage.authToken;
		return $http.post($rootScope.WEBURL + 'webapi/security/isLoggedIn');
	};
	return service;
}]);
