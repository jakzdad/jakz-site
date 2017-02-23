var siteApp = angular.module('siteApp',[]);

siteApp.controller('navController', ['$scope', function($scope){
  console.log('test');

  $scope.info = [
    {
      firstName: 'Jordan',
      lastName: 'Melendez',
      image: 'images/aboutpic.jpg',
      about: 'Write a little something about yourself here and itll show up there.',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com',
      github: 'https://github.com/jmelendev',
      freeCodeCamp: 'https://www.freecodecamp.com/jmelendev',
      codepen: 'https://codepen.io/jmelendev92/'
    }
  ];
  
}]);
