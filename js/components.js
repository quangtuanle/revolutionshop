(function(){
    var app = angular.module('revolution-component', []);

    app.component('productAll', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var productsArr;
            var productHatRef           = new Firebase("https://revolution-shop.firebaseio.com/product/hat");
            var productSandalRef        = new Firebase("https://revolution-shop.firebaseio.com/product/sandal");
            var productLazyShoesRef     = new Firebase("https://revolution-shop.firebaseio.com/product/lazyshoes");
            var productSportShoesRef    = new Firebase("https://revolution-shop.firebaseio.com/product/sportshoes");
            var productSkirtRef         = new Firebase("https://revolution-shop.firebaseio.com/product/skirt");
            var productPromDressRef     = new Firebase("https://revolution-shop.firebaseio.com/product/promdress");
            var productSleepDressRef    = new Firebase("https://revolution-shop.firebaseio.com/product/sleepdress");

            productsArr = $firebaseArray(productHatRef);

            productSandalRef.on("child_added", function _add(snap, prevChild){
                productsArr.$add(snap.val());
            });
            productLazyShoesRef.on("child_added", function _add(snap, prevChild){
                productsArr.$add(snap.val());
            });
            productSportShoesRef.on("child_added", function _add(snap, prevChild){
                productsArr.$add(snap.val());
            });
            productSkirtRef.on("child_added", function _add(snap, prevChild){
                productsArr.$add(snap.val());
            });
            productPromDressRef.on("child_added", function _add(snap, prevChild){
                productsArr.$add(snap.val());
            });
            productSleepDressRef.on("child_added", function _add(snap, prevChild){
                productsArr.$add(snap.val());
            });

            $scope.products = productsArr.slice();

            console.log($scope.products);
        }]
    });

    function toObject(arr) {
        var rv = {};
        for (var i = 0; i < arr.length; ++i)
            rv[i] = arr[i];
        return rv;
    }

    // HAT COMPONENT
    app.component('hatList', {
        templateUrl: 'template/product-list.template.html',
        controller: ['$scope', '$firebaseArray', function($scope, $firebaseArray){
            var hatRef = new Firebase("https://revolution-shop.firebaseio.com/product/hat");
            $scope.products = $firebaseArray(hatRef);

            console.log($scope.products);
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

            // Animation Image Object
            jQuery(document).ready(function($){
                $('#etalage').etalage({
                    thumb_image_width: 300,
                    thumb_image_height: 400,
                    source_image_width: 900,
                    source_image_height: 1200,
                    show_hint: true,
                });
            });

            // Animation Image Relative
            $(window).load(function() {
                $("#flexiselDemo1").flexisel({
                    visibleItems: 5,
                    animationSpeed: 1000,
                    autoPlay: true,
                    autoPlaySpeed: 3000,
                    pauseOnHover: true,
                    enableResponsiveBreakpoints: true,
                    responsiveBreakpoints: {
                        portrait: {
                            changePoint:480,
                            visibleItems: 1
                        },
                        landscape: {
                            changePoint:640,
                            visibleItems: 2
                        },
                        tablet: {
                            changePoint:768,
                            visibleItems: 3
                        }
                    }
                });
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

            // Animation Image Object
            jQuery(document).ready(function($){
                $('#etalage').etalage({
                    thumb_image_width: 300,
                    thumb_image_height: 400,
                    source_image_width: 900,
                    source_image_height: 1200,
                    show_hint: true,
                });
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

            // Animation Image Object
            jQuery(document).ready(function($){
                $('#etalage').etalage({
                    thumb_image_width: 300,
                    thumb_image_height: 400,
                    source_image_width: 900,
                    source_image_height: 1200,
                    show_hint: true,
                });
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

            // Animation Image Object
            jQuery(document).ready(function($){
                $('#etalage').etalage({
                    thumb_image_width: 300,
                    thumb_image_height: 400,
                    source_image_width: 900,
                    source_image_height: 1200,
                    show_hint: true,
                });

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

            // Animation Image Object
            jQuery(document).ready(function($){
                $('#etalage').etalage({
                    thumb_image_width: 300,
                    thumb_image_height: 400,
                    source_image_width: 900,
                    source_image_height: 1200,
                    show_hint: true,
                });
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

            // Animation Image Object
            jQuery(document).ready(function($){
                $('#etalage').etalage({
                    thumb_image_width: 300,
                    thumb_image_height: 400,
                    source_image_width: 900,
                    source_image_height: 1200,
                    show_hint: true,
                });
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

            // Animation Image Object
            jQuery(document).ready(function($){
                $('#etalage').etalage({
                    thumb_image_width: 300,
                    thumb_image_height: 400,
                    source_image_width: 900,
                    source_image_height: 1200,
                    show_hint: true,
                });
            });
        }]
    });

})();