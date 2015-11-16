var app = angular.module('flappernews', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
    });

  $urlRouterProvider.otherwise('home');
}]);
