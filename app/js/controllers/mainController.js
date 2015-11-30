flapperNews.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
  var self = this;

  self.posts = posts.posts;

  self.addPost = function() {
    if(!self.title || self.title === '') { return; }
    self.posts.push({
      title: self.title,
      link: self.link,
      upvotes: 0,
      comments: []
    });
    self.title = '';
    self.link = '';
  };

  self.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);