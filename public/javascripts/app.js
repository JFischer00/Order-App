var app = angular.module('orderApp', ['ngRoute', 'ngResource']).run(function($rootScope, $http) {
	$rootScope.authenticated = false;
	$rootScope.current_user = {username: '', password: '', job: ''};
	
	$rootScope.signout = function() {
		$http.get('/auth/signout');
		$rootScope.authenticated = false;
		$rootScope.current_user = {username: '', password: '', job: ''};
	};
});

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
});