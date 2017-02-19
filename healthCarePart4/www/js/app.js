(function() {

  var app = angular.module('app', ['ionic']);
  
  app.controller('CameraCtrl', function($scope, $cordovaCamera) {
  $scope.pictureUrl = 'http://placehold.it/300x300';

  $scope.takePicture = function() {
    $cordovaCamera.getPicture({})
      .then(function(data) {
        console.log('camera data: ' + angular.toJson(data));
      }, function (error) {
        console.log('camera error: ' + angular.toJson(data));
      });
  };
});


    app.config(function($stateProvider, $urlRouterProvider) {
      
      $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'

      });

      $stateProvider.state('graph', {
        url: '/graph',
        templateUrl: 'templates/graph.html'
      });

      $stateProvider.state('camera', {
        url: '/camera',
        templateUrl: 'templates/camera.html'
      });

      $stateProvider.state('settings', {
        url: '/settings', 
        templateUrl: 'templates/settings.html'

      });

      $urlRouterProvider.otherwise('/home');
    });

    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });

}());