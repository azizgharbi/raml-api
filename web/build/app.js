/**
 * This file exists to control the order in which compiled TypeScript files are
 * concatenated into the resulting www/js/app.js file. While all *.ts files could
 * be listed here, we don't need to list them all since the tsc compiler will
 * automatically traverse the directory tree.
 */
/// <reference path="shared/libs/angular.d.ts" />
/// <reference path="shared/libs/angular-animate.d.ts" />
/// <reference path="shared/libs/angular-mocks.d.ts" />
/// <reference path="shared/libs/angular-resource.d.ts" />
/// <reference path="shared/libs/angular-route.d.ts" />
/// <reference path="shared/libs/angular-ui-bootstrap.d.ts" />
/// <reference path="../_references.ts" />
var User;
(function (User) {
    "use strict";
    var app = angular.module('myApp', []);
    var usersCtrl = (function () {
        function usersCtrl($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.Fetech(); // call function
            $scope.us = this;
        }
        // get users 
        usersCtrl.prototype.Fetech = function () {
            var self = this;
            self.$http.get("http://localhost:3000/v1/users")
                .success(function (response) {
                self.$scope.users = response;
            });
        };
        //create user 
        usersCtrl.prototype.Create = function (data) {
            data = { 'name': this["name"], 'email': this["email"] };
            var self = this;
            self.$http({
                method: 'POST',
                url: 'http://localhost:3000/v1/add',
                data: data,
                headers: { 'Content-Type': 'application/json' }
            })
                .success(function (data) {
                self.$scope.users.push(data["response"]);
                console.log(self.$scope.users);
                /*
                var myEl = angular.element( document.querySelector( '#addus' ) );
                myEl.append("<br><li> Nom :"+data["response"]["name"]+" Email:" +data["response"]["email"]+"</li>");
                */
            });
        };
        usersCtrl.$inject = ["$scope", "$http"];
        return usersCtrl;
    })();
    User.usersCtrl = usersCtrl;
    app.controller("usersIndex", User.usersCtrl);
    app.controller("usersCreate", User.usersCtrl);
})(User || (User = {}));
