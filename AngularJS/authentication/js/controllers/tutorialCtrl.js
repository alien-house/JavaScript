//var tutCtrl = angular.module("tutorialCtrl", []);

// tutCtrl.controller();
// tutCtrl.service();

angular.module("tutorialCtrlModule", [])
.controller("TutorialCtrl", ["$scope","Calculations", function($scope,Calculations){
	$scope.tutorialObject = {};
	$scope.tutorialObject.title    = "Main Page";
	$scope.tutorialObject.subtitle = "Sub Page";
	$scope.tutorialObject.firstname    = "tom";
	$scope.tutorialObject.lastname = "aPage";
	$scope.tutorialObject.bindOutput = 2;
	$scope.timesTwo = function(){
		// $scope.tutorialObject.bindOutput += 2;
		$scope.tutorialObject.bindOutput  = Calculations.timesTwo($scope.tutorialObject.bindOutput);
	}
	Calculations.pythagoreanTheorum()

}])
.controller("TutorialCtrl2", ["$scope", function($scope){
	$scope.secondTutorial = "This is the second tutorial.";
}])

// 13. Directives
.directive("tbWelcomeMessage",function(){
	return {
		restrict: "E", //E-Element , C-Class ...
		template: "<div>Hiwdy how are you?</div>"
	}
})

// 14. Services
.factory("Calculations", function(){
	var calculations = {};
	calculations.timesTwo = function(a){
		return a * 2;
	};
	calculations.pythagoreanTheorum = function(a, b){
		return (a * a) + (b * b);
	}
	return calculations;
})

// 15. Scopes


// 16. Filters




;

