
module MyApp{
    /**
     * TestController
     */
   export class TestController {
       private name : string;
        constructor(private $scope : any) {
         var vm :any = this;
         vm.name = "From Test Controller";
        }
    }
}