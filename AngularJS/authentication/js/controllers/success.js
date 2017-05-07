myApp.controller('SuccessController', ['$scope', function($scope) {
	console.log($scope.b);
	$scope.currentUser = $scope.currentUser;
  $scope.message = "Success!!!";
}]);