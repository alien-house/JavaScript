var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
	$routeProvider
		.when("/", {
			templateUrl: "views/groceryList.html",
			controller: "GroceryListItemsController"
		})
		.when("/addItem", {
			templateUrl: "views/addItem.html",
			controller: "GroceryListItemsController"
		})
		.when("/addItem/:id/:cat", {
			templateUrl: "views/addItem.html",
			controller: "GroceryListItemsController"
		})
		.otherwise({
			redirectTo: "/"
		})
	$locationProvider.hashPrefix('');
});

app.controller("HomeController", ["$scope", function($scope){
	$scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemsController", ["$scope","$routeParams", function($scope, $routeParams){
	$scope.groceryitems = [
		{completed: true, itemName: 'milk', data: '2014-10-21'},
		{completed: true, itemName: 'cookies', data: '2014-10-01'},
		{completed: true, itemName: 'der', data: '2014-10-09'}
	];
	$scope.rp = "Route Paramater Value: " + $routeParams.id + $routeParams.cat;
}]);



// // var app = angular.module('tutorialApp', ["tutorialCtrlModule"]);
// var app = angular.module('tutorialApp', ["ngRoute", "tutorialCtrlModule"]);

// //to load templates
// app.config(function($routeProvider,$locationProvider){
// 	$routeProvider
// 		.when("/", {
// 			templateUrl: "views/tutorial.html",
// 			controller: "TutorialCtrl"
// 		})
// 		.when("/tutorialSecond", {
// 			templateUrl: "views/tutorialSecond.html",
// 			controller: "TutorialCtrl2"
// 		})
// 		.otherwise({
// 			redirectTo: "/"
// 		})

// 	$locationProvider.hashPrefix('');

// });
