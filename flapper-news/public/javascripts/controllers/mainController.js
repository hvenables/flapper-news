flapperNews.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
  var self = this;

  self.posts = posts.posts;

  self.addPost = function() {
    if(!self.title || self.title === '') { return; }
    posts.create({
      title: self.title,
      link: self.link,
    });
    self.title = '';
    self.link = '';
  };

  self.incrementUpvotes = function(post) {
    posts.upvote(post);
  };
}]);
