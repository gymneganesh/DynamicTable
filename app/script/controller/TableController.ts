

module MyApp {
        export class TableController {
            private name:string;
            constructor(private $scope :any, service :TableService){
                this.name = service.getServiceName();
            }
        }
}