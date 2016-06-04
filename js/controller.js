(function() {
    var app = angular.module('revolutionShop', ['revolution-directive']);

    app.controller('RevolutionController', ['$scope',
        function($scope){
            var ref = new Firebase("https://revolution-shop.firebaseio.com");

            //On load
            var authData = ref.getAuth();

            //logout with facebook
            ref.onAuth(function(authData){
                if (!authData) {
                    window.location = "login.html";
                }
            });

            $scope.logout = function() {
                var ref = new Firebase("https://revolution-shop.firebaseio.com");
                ref.unauth();
            }
        }
    ]);

    app.controller('ProfileController', function(){

    });

    app.controller('CartController', function(){

    });

    app.controller('LoginController', ['$scope',
        function($scope) {
            this.login = function () {
                var ref = new Firebase("https://revolution-shop.firebaseio.com");
                ref.authWithPassword({
                    email: $scope.emailLogin,
                    password: $scope.passwordLogin
                }, function (error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                        window.location = "youraccount.html";
                    }
                });
            };

            $scope.logfacebook = function () {
                var ref = new Firebase("https://revolution-shop.firebaseio.com");
                ref.authWithOAuthPopup("facebook", function(error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);

                        // ID Active
                        ref.update({
                           active: authData.uid
                        });

                        var refUsers = new Firebase("https://revolution-shop.firebaseio.com/users");
                        if (refUsers.hasOwnProperty(authData.uid) != null) {
                            console.log("Account is existed! Come on!");
                            window.location = "youraccount.html";
                            return;
                        }

                        var usersRef = ref.child("users/" + authData.uid);
                        usersRef.set({
                            first_name: "ssss",
                            last_name: "",
                            email: "",
                            avatar: "",
                            phone: "",
                            address: ""
                        });

                        window.location = "youraccount.html";
                    }
                });
            };

            $scope.loggoogle = function () {
                var ref = new Firebase("https://revolution-shop.firebaseio.com");
                ref.authWithOAuthPopup("google", function(error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);

                        // ID Active
                        ref.update({
                            active: authData.uid
                        });

                        var refUsers = new Firebase("https://revolution-shop.firebaseio.com/users");
                        if (refUsers.hasOwnProperty(authData.uid) != null) {
                            console.log("Account is existed! Come on!");
                            window.location = "youraccount.html";
                            return;
                        }

                        var usersRef = ref.child("users/" + authData.uid);
                        usersRef.set({
                            first_name: "ssss",
                            last_name: "",
                            email: "",
                            avatar: "",
                            phone: "",
                            address: ""
                        });

                        window.location = "youraccount.html";
                    }
                });
            };
        }
    ]);

    app.controller('RegisterController', function($scope){
        this.register = function(){
            if ($scope.passwordRegister !== $scope.rePasswordRegister){
                console.log('Password is not duplicated');
                return;
            }

            var ref = new Firebase("https://revolution-shop.firebaseio.com");
            ref.createUser({
                email    : $scope.emailRegister,
                password : $scope.passwordRegister
            }, function(error, userData) {
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    // ID Active
                    ref.update({
                        active: userData.uid
                    });

                    var usersRef = ref.child("users/" + userData.uid);
                    usersRef.set({
                        first_name: $scope.firstNameRegister,
                        last_name: $scope.lastNameRegister,
                        email: $scope.emailRegister,
                        avatar: "",
                        phone: "",
                        address: ""
                    });
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });
        };
    });

})();