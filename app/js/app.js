var flapperNews = angular.module('flappernews', ['ui.router']);

flapperNews.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/templates/home.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
    })

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'app/templates/posts.html',
      controller: 'PostsCtrl',
      controllerAs: 'posts'
    });


  $urlRouterProvider.otherwise('home');
}]);
