describe('PostsCtrl', function() {


  var ctrl, scope, $stateParams;

  $stateParams = { id: '1' }

  beforeEach(function() {

    module('flappernews');

    inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.fakeStateParams = { id: '1' }
    ctrl = $controller('PostsCtrl', { $scope:scope, $stateParams: $stateParams });
    });
  });

  it('starts with no comments', function() {
  });
});
