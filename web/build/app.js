var User;
(function (User) {
    "use strict";
    var app = angular.module('myApp', []);
    var usersCtrl = (function () {
        function usersCtrl($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.Fetech();
            $scope.us = this;
        }
        usersCtrl.prototype.Fetech = function () {
            var self = this;
            self.$http.get("http://localhost:3000/v1/users")
                .success(function (response) {
                self.$scope.us.users = response;
            });
        };
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
                self.$scope.us.users.push(data["response"]);
            });
        };
        usersCtrl.prototype.Refresh = function () {
            var self = this;
            self.$http.get("http://localhost:3000/v1/users")
                .success(function (response) {
                self.$scope.us.users = response;
            });
        };
        usersCtrl.$inject = ["$scope", "$http"];
        return usersCtrl;
    }());
    User.usersCtrl = usersCtrl;
    app.controller("usersIndex", User.usersCtrl);
    app.controller("usersCreate", User.usersCtrl);
})(User || (User = {}));
