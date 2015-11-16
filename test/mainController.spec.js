describe('MainCtrl', function() {

  beforeEach(module('flappernews'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', { $scope:scope });
  }));

  it('test has been defined in the controller', function() {
    expect(ctrl.test).toEqual('Hello World')
  });

  it('starts with an empty list of posts', function() {
    expect(ctrl.posts.length).toEqual(0)
  });

  it('can add an item to the posts', function() {
    ctrl.title = "hello";
    ctrl.addPost();
    expect(ctrl.posts[0].title).toEqual("hello")
  });

  it('can increase the upvotes', function() {
    ctrl.title = "hello";
    ctrl.addPost();
    ctrl.incrementUpvotes(ctrl.posts[0])
    expect(ctrl.posts[0].upvotes).toEqual(1)
  });
});
