var flapperNews = angular.module('flappernews', ['ui.router']);

flapperNews.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './partials/home.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      }
    })

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: './partials/posts.html',
      controller: 'PostsCtrl',
      controllerAs: 'posts'
    });


  $urlRouterProvider.otherwise('home');
}]);
