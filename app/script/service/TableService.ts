module MyApp {
    export class TableService{
        private serviceName :string;
        constructor(){
            this.serviceName = "From Nav Service";
        }

        public getServiceName():string {
            return this.serviceName;
        }
    }
}