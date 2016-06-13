
module MyApp {
var app :angular.IModule =  angular.module('MyApp',[]);
app.controller('TableController', ['$scope',($scope)=> new TableController($scope)]);
app.controller('TestController',['$scope',($scope)=> new TestController($scope)]);
}