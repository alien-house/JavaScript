var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
	$routeProvider
		.when("/", {
			templateUrl: "views/groceryList.html",
			controller: "HomeController"
		})
		.when("/addItem", {
			templateUrl: "views/addItem.html",
			controller: "GroceryListItemsController"
		})
		.when("/addItem/edit/:id/", {
			templateUrl: "views/addItem.html",
			controller: "GroceryListItemsController"
		})
		.otherwise({
			redirectTo: "/"
		})
	$locationProvider.hashPrefix('');
});

app.service("GroceryService",function(){

	var groceryService = {};
	groceryService.groceryItems = [
		{id: 1, completed: true, itemName: 'milk', data: '2014-10-21'},
		{id: 2, completed: true, itemName: 'cookies', data: '2014-10-01'},
		{id: 3, completed: true, itemName: 'der', data: '2014-10-09'}
	];

	groceryService.findById = function(id){
		for(var item in groceryService.groceryItems){
			if(groceryService.groceryItems[item].id === id)
				 return groceryService.groceryItems[item];
		}
	};



	groceryService.getNewId = function(){
		if(groceryService.newId){
			groceryService.newId++;
			return groceryService.newId;
		}else{
			var maxId = _.max(groceryService.groceryItems,function(entry){ return entry.id; });
			groceryService.newId = maxId.id + 1;
			return groceryService.newId;
		}
	};

	groceryService.save = function(entry){
		var updateItem = groceryService.findById(entry.id);
		if(updateItem){
			updateItem.completed = entry.completed;
			updateItem.itemName = entry.itemName;
			updateItem.date = entry.date;
		}else{
			entry.id = groceryService.getNewId();
			groceryService.groceryItems.push(entry);
		}
	}
	return groceryService;
})

app.controller("HomeController", ["$scope","GroceryService", function($scope, GroceryService){
	// $scope.appTitle = GroceryService.groceryItems[0].itemName;
	$scope.appTitle = "Grocery List";
	$scope.groceryItems = GroceryService.groceryItems;

}]);

app.controller("GroceryListItemsController", ["$scope", "$routeParams", "$location", "GroceryService", function($scope, $routeParams, $location, GroceryService){
	// $scope.groceryItems = GroceryService.groceryItems;
	// $scope.rp = "Route Paramater Value: " + $routeParams.id + $routeParams.cat;
	if(!$routeParams.id){
		$scope.groceryItem = {id: 0, completed: true, itemName: '', data: new Date() };
	}else{
		$scope.groceryItem = _.clone(GroceryService.findById(parseInt($routeParams.id)));
	}
	$scope.save = function () {
		GroceryService.save($scope.groceryItem);
		$location.path("/");
	}
	console.log($scope.groceryItem);
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
