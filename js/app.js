var lucentApp = angular.module('lucentApp', ['ngRoute', 'ngResource']);

// Routes
// ================
lucentApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.hashPrefix('');

  $routeProvider.when('/', {
    templateUrl: 'pages/splash.html',
    controller: 'splashController'
  })

  .when('/home', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/about', {
    templateUrl: 'pages/about.html',
    controller: 'aboutController'
  })

  .when('/contact', {
    templateUrl: 'pages/contact.html',
    controller: 'contactController'
  })

  .when('/products', {
    templateUrl: 'pages/products.html',
    controller: 'productsController'
  })

  .otherwise({
      redirectTo : '/'
  });

}]);

lucentApp.controller('navController', ['$scope', function($scope){

  //nav show and hide
  $scope.navOpen = false;
  $scope.drawerTigger = function() {
    console.log('test');
    $scope.navOpen = !$scope.navOpen;
  };

}]);

lucentApp.controller('splashController', ['$scope', '$location', function($scope, $location){
  $scope.page = 'Splash';
}]);

lucentApp.controller('aboutController', ['$scope', function($scope){
  $scope.page = 'About';
}]);

lucentApp.controller('contactController', ['$scope', function($scope){
  $scope.page = 'Contact';
}]);

lucentApp.controller('productsController', ['$scope', function($scope){
  $scope.page = 'Products';
}]);
