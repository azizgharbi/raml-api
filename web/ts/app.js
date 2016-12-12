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
        }
        // get users 
        usersCtrl.prototype.Fetech = function () {
            var self = this;
            self.$http.get("http://localhost:3000/v1/users")
                .success(function (response) {
                self.$scope.users = response;
            });
        };
        usersCtrl.$inject = ["$scope", "$http"];
        return usersCtrl;
    }());
    User.usersCtrl = usersCtrl;
    app.controller("usersIndex", User.usersCtrl);
})(User || (User = {}));
