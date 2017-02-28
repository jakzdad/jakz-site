var lucentApp = angular.module('lucentApp', ['ngRoute', 'ngResource', 'slickCarousel', 'ngAnimate']);

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

  .when('/products/:item', {
    templateUrl: 'pages/shirts/item.html',
    controller: 'itemController'
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

lucentApp.controller('productsController', ['$scope', '$http', function($scope, $http){

  $scope.items = [
    {
      product: 'Connecticut Tee',
      price: 22,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL',
      outOfStock: false,
      comingSoon: true,
      gallery: [
        {
          imagePath: 'images/tshirt.svg'
        },
        {
          imagePath: 'images/tshirt1.svg'
        },
        {
          imagePath: 'images/tshirt2.svg'
        }
      ]
    },
    {
      product: 'Tiger Tee',
      price: 23,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL',
      outOfStock: true,
      comingSoon: false

    },
    {
      product: 'Wolves Tee',
      price: 22,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL',
      outOfStock: false,
      comingSoon: false

    },
    {
      product: 'Rockstar Tee',
      price: 21,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL',
      outOfStock: false,
      comingSoon: false

    },
    {
      product: 'Up Past Midnight Tee',
      price: 22,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL',
      outOfStock: false,
      comingSoon: false

    },
    {
      product: 'This Tee',
      price: 25,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL',
      outOfStock: true,
      comingSoon: false
    }
  ];

  $scope.noLink = function() {
    if (items.outOfStock = true) {
      console.log('out');
    }
  }

}]);

lucentApp.controller('itemController', ['$scope', '$routeParams', '$timeout', function($scope, $routeParams, $timeout){
  $scope.page = 'Item';
  $scope.selectedShirt = $routeParams.item;
  $scope.items = [
    {
      product: 'Connecticut Tee',
      price: 22,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL',
      gallery: [
        {
          imagePath: 'images/tshirt.svg'
        },
        {
          imagePath: 'images/tshirt1.svg'
        },
        {
          imagePath: 'images/tshirt2.svg'
        }
      ]
    },
    {
      product: 'Tiger Tee',
      price: 23,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL'

    },
    {
      product: 'Wolves Tee',
      price: 22,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL'

    },
    {
      product: 'Rockstar Tee',
      price: 21,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL'

    },
    {
      product: 'Up Past Midnight Tee',
      price: 22,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL'

    },
    {
      product: 'This Tee',
      price: 25,
      image: 'images/tshirt.svg',
      description: 'put description here',
      availableSizes: 'XS S M L XL'

    }
  ]

    $scope.setSlick = true;

    $scope.slickConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      autoplay: false,
      dots: true,
      arrows: true,
      method: {},
      event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {
          },
          afterChange: function (event, slick, currentSlide, nextSlide) {
          }
      }
    };

}]);
