var MyApp;
(function (MyApp) {
    var TableController = (function () {
        function TableController($scope, service) {
            this.$scope = $scope;
            this.name = service.getServiceName();
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
    app.service('TableService', [function () { return new MyApp.TableService(); }]);
    app.controller('TableController', ['$scope', 'TableService', function ($scope, TableService) { return new MyApp.TableController($scope, TableService); }]);
    app.controller('TestController', ['$scope', function ($scope) { return new MyApp.TestController($scope); }]);
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var TableService = (function () {
        function TableService() {
            this.serviceName = "From Nav Service";
        }
        TableService.prototype.getServiceName = function () {
            return this.serviceName;
        };
        return TableService;
    }());
    MyApp.TableService = TableService;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=out.js.map