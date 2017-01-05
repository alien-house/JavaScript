var myApp = angular.module('myApp', ["ngRoute"]);

myApp.controller('appController', ['$scope', function($scope){
	$scope.message = "Welcome to my App";
}])
