/// <reference path="../_references.ts" />
module User {
    "use strict";

    var app = angular.module('myApp', []);

    export interface Iuser extends ng.IScope {
        us:any;
    }

    export class usersCtrl {

        static $inject = ["$scope", "$http"];
        constructor(public $scope: User.Iuser, public $http: ng.IHttpService) {
             this.Fetech(); // call function
             $scope.us = this;
        }


        // get users 
        public Fetech(): void {
            let self = this;
            self.$http.get("http://localhost:3000/v1/users")
                .success(function(response) {
                    self.$scope.us.users = response;
                });
        }


         public Create(data:Object):void { 

        data={'name':this["name"],'email':this["email"]};

          let self = this;
           self.$http({
                method: 'POST',
                url: 'http://localhost:3000/v1/add',
                data:  data, //forms user object
                headers: { 'Content-Type': 'application/json' }
            })
            .success(function(data) {
             console.log(data);

              self.$scope.us.users.push(data);
               

            }); 
        }       

                    
  
    }

    app.controller("usersIndex", User.usersCtrl);
    app.controller("usersCreate", User.usersCtrl);


}