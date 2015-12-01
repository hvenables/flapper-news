describe('flappernews', function() {

  var titleInput = element(by.model('main.title'));
  var linkInput = element(by.model('main.link'));
  var submitButton = element(by.id('submit'));
  var newsItems = element.all(by.repeater('post in main.post'))
  var commentItem = element(by.model('posts.body'));
  var comments = element.all(by.repeater('comment in posts.post.comments'));
  var commentSubmit = element(by.id('commentSubmit'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Flapper News')
  });

  it('has the ability to add to the list', function() {
    titleInput.sendKeys('Harry adds to flappernews');
    submitButton.click();
    expect(newsItems.get(0).getText()).toEqual('0 Harry adds to flappernews Comments');
  });

  it('wont let you add without a title', function() {
    titleInput.sendKeys('');
    submitButton.click();
    newsItems.then(function(item) {
      expect(item.length).toBeLessThan(1);
    });
  });

  it('allows you to like a post', function() {
    titleInput.sendKeys('Harry adds to flappernews');
    submitButton.click();
    element(by.id('0')).click();
    expect(newsItems.get(0).getText()).toEqual('1 Harry adds to flappernews Comments');
  });

  it('allows you to add a link', function() {
    titleInput.sendKeys('Harry adds link to flappernews');
    linkInput.sendKeys('www.bbc.co.uk');
    submitButton.click();
    expect(newsItems.get(0).getText()).toEqual('0 Harry adds link to flappernews Comments');
  });

  it('allows you to add comments', function() {
    titleInput.sendKeys('Harry adds link to flappernews');
    submitButton.click();
    element(by.id('comment0')).click();
    commentItem.sendKeys('nice post');
    commentSubmit.click();
    expect(comments.get(0).getText()).toEqual('0 - by user nice post');
  })

  it('allows you to like a comment', function() {
    titleInput.sendKeys('Harry adds link to flappernews');
    submitButton.click();
    element(by.id('comment0')).click();
    commentItem.sendKeys('nice post');
    commentSubmit.click();
    element(by.id('0')).click();
    expect(comments.get(0).getText()).toEqual('1 - by user nice post');
  })
});
