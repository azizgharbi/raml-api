/// <reference path="../_references.ts" />

module User {
    "use strict";

    var app = angular.module('myApp', []);

    export interface Iuser extends ng.IScope {
        us:any;
        users:any;
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
                    self.$scope.users = response;
                });
        }

//create user 
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
               self.$scope.users.push(data["response"]);
               console.log(self.$scope.users);  
             /*var myEl = angular.element( document.querySelector( '.addus' ) );
             myEl.append("<br><li> Nom :"+data["response"]["name"]+" Email:" +data["response"]["email"]+"</li>");   */

            }); 
        } 

       
                    
  
    }

    app.controller("usersIndex", User.usersCtrl);
    app.controller("usersCreate", User.usersCtrl);


}