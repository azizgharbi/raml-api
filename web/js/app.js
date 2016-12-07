var app = angular.module('myApp', ['schemaForm']);
// fetech data
app.controller('usersCtrl', function($scope, $http) {
    $http.get("http://localhost:3000/v1/users")
        .then(function(response) {
            $scope.users = response.data;
        });
});
// post data
app.controller('postController', function($scope, $http) {
    $scope.schema = {
        type: "object",
        properties: {
            name: {
                type: "string",
                minLength: 4,
                title: "Name",
                description: "Enter your name please",
                required: true
            },
            email: {
                type: "string",
                title: "Email",
                description: "Enter your email please",
                pattern: "^\\S+@\\S+$",
                required: true
            }
        }
    }
    $scope.form = [
        "*", {
            type: "submit",
            title: "Save"
        }
    ];
    $scope.user = {};
    $scope.submitForm = function() {
        $http({
                method: 'POST',
                url: 'http://localhost:3000/v1/add',
                data: $scope.user, //forms user object
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function(data) {
                if (data.errors) {
                    console.log("error");
                } else {
                    $scope.user.name = "";
                    $scope.user.email = "";
                    $scope.message = "Success operation";
                }
            });
    };
});