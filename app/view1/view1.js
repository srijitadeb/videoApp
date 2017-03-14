'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'loginCtrl'
  });
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('loginCtrl', function($scope, $location) {
	$scope.username = 'world@gmail.com';
	$scope.password ='helloWorld';
	$scope.signinBtn = function(){
		console.log("hi");
		if(($scope.username =='world@gmail.com') && ($scope.password == 'helloWorld')){
			$location.url('view2');
		}else{

			alert("Please Enter correct username and password");
			
		}
	}

});