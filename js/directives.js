(function(){
    var app = angular.module('revolution-directive', []);

    app.directive('headerRevolution', function(){
        return {
            restrict: 'E',
            templateUrl: 'template/header-revolution.html'
        };
    });

    app.directive('categoriesRevolution', function(){
        return {
            restrict: 'E',
            templateUrl: 'template/categories-revolution.html'
        };
    });

    app.directive('footerRevolution', function(){
        return {
            restrict: 'E',
            templateUrl: 'template/footer-revolution.html'
        };
    });
})();