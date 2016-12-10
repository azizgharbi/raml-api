/// <reference path="../_references.ts" />
var User;
(function (User) {
    "use strict";
    var app = angular.module('myApp', []);
    var usersCtrl = (function () {
        function usersCtrl($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.Fetech();
        }
        usersCtrl.prototype.Fetech = function () {
            var self = this;
            self.$http.get("http://localhost:3000/v1/users")
                .success(function (response) {
                self.$scope.users = response;
            });
        };
        return usersCtrl;
    }());
    usersCtrl.$inject = ["$scope", "$http"];
    User.usersCtrl = usersCtrl;
    app.controller("usersCtrl", User.usersCtrl);
})(User || (User = {}));
