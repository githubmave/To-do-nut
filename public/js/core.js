angular.module('scotchTodo', [

	'ngRoute',
	'todoController', 
	'todoService'
	])
.config(['$routeProvider',function($routeProvider){
   	$routeProvider.when('/listView',{templateUrl:'templates/listView.html',controller:'mainController'});
   	$routeProvider.when('/listView/:itemId',{templateUrl:'templates/listDetailsView.html',controller:'mainController'});

    $routeProvider.when('/wantBuy',{templateUrl:'templates/wantBuy.html'});
    $routeProvider.when('/wantSay',{templateUrl:'templates/wantSay.html'});

   	$routeProvider.otherwise({redirectTo:'/listView'});	

}]);
