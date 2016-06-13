var MyApp;
(function (MyApp) {
    var TableController = (function () {
        function TableController($scope) {
            this.$scope = $scope;
            this.name = "Navaneethaha";
        }
        return TableController;
    }());
    MyApp.TableController = TableController;
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var TestController = (function () {
        function TestController($scope) {
            this.$scope = $scope;
            var vm = this;
            vm.name = "From Test Controller";
        }
        return TestController;
    }());
    MyApp.TestController = TestController;
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var app = angular.module('MyApp', []);
    app.controller('TableController', ['$scope', function ($scope) { return new MyApp.TableController($scope); }]);
    app.controller('TestController', ['$scope', function ($scope) { return new MyApp.TestController($scope); }]);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=out.js.map