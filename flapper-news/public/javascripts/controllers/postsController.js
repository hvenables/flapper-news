flapperNews.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
  var self = this;

  self.post = posts.posts[$stateParams.id];

  self.addComment = function() {
    if(self.body === '') { return; }
    self.post.comments.push({
      author: 'user',
      body: self.body,
      upvotes: 0
    });
    self.body = '';
  };

  self.incrementUpvotes = function(comment) {
    comment.upvotes += 1;
  };
}]);
