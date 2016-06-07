(function(){
    var app = angular.module('revolution-component', []);

    app.component('productAll', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var productRef = new Firebase("https://revolution-shop.firebaseio.com/product");
            //$scope.products = $firebaseArray(productRef);
            productRef.on("value", function(snapshot) {
                $scope.products = snapshot.val();
                console.log($scope.products);
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }]
    });

    // HAT COMPONENT
    app.component('hatList', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var hatRef = new Firebase("https://revolution-shop.firebaseio.com/product/hat");
            $scope.products = $firebaseArray(hatRef);
        }]
    });

    app.component('hatDetail', {
        templateUrl: 'template/product-detail.template.html',
        controller: ['$scope', '$firebaseArray', '$routeParams', function($scope, $firebaseArray, $routeParams){
            var index = ($routeParams.hatId - 1).toString();
            var hatRefId = new Firebase("https://revolution-shop.firebaseio.com/product/hat/" + index);
            hatRefId.on("value", function(snapshot) {
                $scope.product = snapshot.val();

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }]
    });

    // SKIRT COMPONENT
    app.component('skirtList', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var skirtRef = new Firebase("https://revolution-shop.firebaseio.com/product/skirt");
            $scope.products = $firebaseArray(skirtRef);
        }]
    });

    app.component('skirtDetail', {
        templateUrl: 'template/product-detail.template.html',
        controller: ['$scope', '$firebaseArray', '$routeParams', function($scope, $firebaseArray, $routeParams){
            var index = ($routeParams.skirtId - 1).toString();
            var skirtRefId = new Firebase("https://revolution-shop.firebaseio.com/product/skirt/" + index);
            skirtRefId.on("value", function(snapshot) {
                $scope.product = snapshot.val();

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }]
    });

    // SLEEP DRESS COMPONENT
    app.component('sleepdressList', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var sleepdressRef = new Firebase("https://revolution-shop.firebaseio.com/product/sleepdress");
            $scope.products = $firebaseArray(sleepdressRef);
        }]
    });

    app.component('sleepdressDetail', {
        templateUrl: 'template/product-detail.template.html',
        controller: ['$scope', '$firebaseArray', '$routeParams', function($scope, $firebaseArray, $routeParams){
            var index = ($routeParams.sleepdressId - 1).toString();
            var sleepdressRefId = new Firebase("https://revolution-shop.firebaseio.com/product/sleepdress/" + index);
            sleepdressRefId.on("value", function(snapshot) {
                $scope.product = snapshot.val();

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }]
    });

    // PROM DRESS COMPONENT
    app.component('promdressList', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var promdressRef = new Firebase("https://revolution-shop.firebaseio.com/product/promdress");
            $scope.products = $firebaseArray(promdressRef);
        }]
    });

    app.component('promdressDetail', {
        templateUrl: 'template/product-detail.template.html',
        controller: ['$scope', '$firebaseArray', '$routeParams', function($scope, $firebaseArray, $routeParams){
            var index = ($routeParams.promdressId - 1).toString();
            var promdressRefId = new Firebase("https://revolution-shop.firebaseio.com/product/promdress/" + index);
            promdressRefId.on("value", function(snapshot) {
                $scope.product = snapshot.val();

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }]
    });

    // SANDAL COMPONENT
    app.component('sandalList', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var sandalRef = new Firebase("https://revolution-shop.firebaseio.com/product/sandal");
            $scope.products = $firebaseArray(sandalRef);
        }]
    });

    app.component('sandalDetail', {
        templateUrl: 'template/product-detail.template.html',
        controller: ['$scope', '$firebaseArray', '$routeParams', function($scope, $firebaseArray, $routeParams){
            var index = ($routeParams.sandalId - 1).toString();
            var sandalRefId = new Firebase("https://revolution-shop.firebaseio.com/product/sandal/" + index);
            sandalRefId.on("value", function(snapshot) {
                $scope.product = snapshot.val();

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }]
    });

    // LAZY SHOES COMPONENT
    app.component('lazyshoesList', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var lazyshoesRef = new Firebase("https://revolution-shop.firebaseio.com/product/lazyshoes");
            $scope.products = $firebaseArray(lazyshoesRef);
        }]
    });

    app.component('lazyshoesDetail', {
        templateUrl: 'template/product-detail.template.html',
        controller: ['$scope', '$firebaseArray', '$routeParams', function($scope, $firebaseArray, $routeParams){
            var index = ($routeParams.lazyshoesId - 1).toString();
            var lazyshoesRefId = new Firebase("https://revolution-shop.firebaseio.com/product/lazyshoes/" + index);
            lazyshoesRefId.on("value", function(snapshot) {
                $scope.product = snapshot.val();

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }]
    });

    // SPORT SHOES COMPONENT
    app.component('sportshoesList', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var sportshoesRef = new Firebase("https://revolution-shop.firebaseio.com/product/sportshoes");
            $scope.products = $firebaseArray(sportshoesRef);
        }]
    });

    app.component('sportshoesDetail', {
        templateUrl: 'template/product-detail.template.html',
        controller: ['$scope', '$firebaseArray', '$routeParams', function($scope, $firebaseArray, $routeParams){
            var index = ($routeParams.sportshoesId - 1).toString();
            var sportshoesRefId = new Firebase("https://revolution-shop.firebaseio.com/product/sportshoes/" + index);
            sportshoesRefId.on("value", function(snapshot) {
                $scope.product = snapshot.val();

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }]
    });

})();