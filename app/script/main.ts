
module MyApp {
var app :angular.IModule =  angular.module('MyApp',[]);
app.service('TableService',[()=> new TableService()])


app.controller('TableController', ['$scope','TableService',($scope,TableService)=> new TableController($scope,TableService)]);
app.controller('TestController',['$scope',($scope)=> new TestController($scope)]);

}