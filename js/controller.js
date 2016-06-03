(function() {
    var app = angular.module('revolutionShop', ['revolution-directive']);

    app.controller('revolutionCtrl', function(){

    });

    app.controller('LoginController', function($scope){
        this.login = function(){
            var ref = new Firebase("https://revolution-shop.firebaseio.com");
            ref.authWithPassword({
                email    : $scope.emailAccount,
                password : $scope.passwordAccount
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    window.alert("OK!!");
                }
            });
        };
    });

    app.controller('RegisterController', function($scope){
        this.register = function(){
            if ($scope.passwordAccount !== $scope.rePasswordAccount){
                console.log('Password is not duplicated');
                return;
            }

            var ref = new Firebase("https://revolution-shop.firebaseio.com");
            ref.createUser({
                email    : $scope.emailAccount,
                password : $scope.passwordAccount
            }, function(error, userData) {
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });
        };
    });

})();