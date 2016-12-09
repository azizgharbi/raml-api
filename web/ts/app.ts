/// <reference path="../_references.ts" />

module User
{
     "use strict"; 

     var app=angular.module('myApp',[]);

    export interface Iuser  extends ng.IScope
    {
        users: any;
    }

    export class usersCtrl
    {
        static $inject = ["$scope", "$http"];
        
        constructor(public $scope: User.Iuser, public $http: ng.IHttpService) {
           this.Fetech();
        }

        public Fetech(): void {
            let self = this;
            self.$http.get("http://localhost:3000/v1/users")
                .success(function(response) {
                    self.$scope.users = response["data"];
                });
        }
    }

    app.controller("usersCtrl", User.usersCtrl);
   

}