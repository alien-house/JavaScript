// setting some modeul
var myApp = angular.module('myApp', ["ngRoute","firebase"]);

// if it's not logged in, it can be jumped to login page
myApp.run(['$rootScope', '$location', function($rootScope, $location){
	$rootScope.$on('$routeChangeError', function(event, next, previous, error){
		if(error == 'AUTH_REQUIRED'){
			$rootScope.message = 'Sorry, you must log in to access that page';
			$location.path('/login');
		}
	})
}])

// switching view
myApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/success', {
			templateUrl: 'views/success.html',
			controller: 'SuccessController',
			//resolve : before executing controller, create a data which should be Injection.
			resolve: {
				currentAuth: function(Authentication){
					return Authentication.requireAuth();
				}
			}
		}).
		otherwise({
			redirectTo: '/login'
		});
	$locationProvider.hashPrefix('');
}]);

// myApp.controller('appController', ['$scope', function($scope){
// 	$scope.message = "Welcome to my App";
// }])
