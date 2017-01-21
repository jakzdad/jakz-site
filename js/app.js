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

  $scope.items = [
    {
      product: 'Connecticut Tee',
      price: 22,
      image: 'images/tshirt.svg',
      url: 'products/connecticut-tee.html'
    },
    {
      product: 'Tiger Tee',
      price: 23,
      image: 'images/tshirt.svg',
      url: 'products/tiger-tee.html'

    },
    {
      product: 'Wolves Tee',
      price: 22,
      image: 'images/tshirt.svg',
      url: 'products/wolves-tee.html'

    },
    {
      product: 'Rockstar Tee',
      price: 21,
      image: 'images/tshirt.svg',
      url: 'products/rockstar-tee.html'

    },
    {
      product: 'Up Past Midnight Tee',
      price: 22,
      image: 'images/tshirt.svg',
      url: 'products/up-past-midnight-tee.html'

    },
    {
      product: 'This Tee',
      price: 25,
      image: 'images/tshirt.svg',
      url: 'products/this-tee.html'

    }
  ]
}]);
