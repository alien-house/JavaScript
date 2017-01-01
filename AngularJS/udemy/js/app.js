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

app.service("GroceryService",function($http){

	var groceryService = {};
	groceryService.groceryItems = [
		// {id: 1, completed: true, itemName: 'milk', data: '2014-10-21'},
		// {id: 2, completed: true, itemName: 'cookies', data: '2014-10-01'},
		// {id: 3, completed: true, itemName: 'der', data: '2014-10-09'}
	];

	// $http.get("http://example.com/api/");
	$http({
		method: 'GET',
		url: 'data/server_data.json'
	}).then(function successCallback(response) {
		groceryService.groceryItems = response.data;
		for(var item in groceryService.groceryItems){
			// console.log(groceryService.groceryItems[item]);
			groceryService.groceryItems[item].date = new Date(groceryService.groceryItems[item].date);
			console.log(groceryService.groceryItems[item].date);
		}
	}, function errorCallback(data, status) {
		alert("Things went wrong");
	});


	// $http.get("data/server_data.json")
	// 	.success(function(data){
	// 	})
	// 	.error(function(data, status){

	// 	});

	groceryService.findById = function(id){
		for(var item in groceryService.groceryItems){
			if(groceryService.groceryItems[item].id === id)
				 return groceryService.groceryItems[item];
		}
	};

	// If you use DB, you dont need this function.
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

	groceryService.markCompleted = function(entry){
		entry.completed = !entry.completed;
	}

	groceryService.removeItem = function(entry){
		$http.post("data/delete_item.json", {id:entry.id})
			.success(function(data){
				if(data.status){
					var index = groceryService.groceryItems.indexOf(entry);
					groceryService.groceryItems.splice(index, 1);
				}
			})
			.error(function(data, status){
			})

	}

	groceryService.save = function(entry){
		var updateItem = groceryService.findById(entry.id);
		if(updateItem){
			$http.post("data/updated_item.json", entry)
			.success(function(data){
				if(data.status == 1){
					updateItem.completed = entry.completed;
					updateItem.itemName = entry.itemName;
					updateItem.date = entry.date;
				}
			})
			.error(function(data, status){
			})

		}else{
			$http.post("data/added_item.json", entry)
			.success(function(data){
				entry.id = data.newId;
			})
			.error(function(data, status){
			})

			// entry.id = groceryService.getNewId();
			groceryService.groceryItems.push(entry);
		}
	}
	return groceryService;
})

app.controller("HomeController", ["$scope","GroceryService", function($scope, GroceryService){
	// $scope.appTitle = GroceryService.groceryItems[0].itemName;
	$scope.appTitle = "Grocery List";
	$scope.groceryItems = GroceryService.groceryItems;
	$scope.removeItem = function(entry){
		GroceryService.removeItem(entry);
	};
	$scope.markCompleted = function(entry){
		GroceryService.markCompleted(entry);
	};
	// when something in "GroceryService.groceryItems" has changed, it update it.
	$scope.$watch(function(){
		return GroceryService.groceryItems;
	}, function(groceryItems){
		$scope.groceryItems = groceryItems;
	});

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
	// console.log($scope.groceryItem);
}]);

app.directive("tbGroceryItem", function(){
	return{
		restrict: "E",
		templateUrl: "views/groceryItem.html",
	}
})


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
