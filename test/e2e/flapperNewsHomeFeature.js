describe('flappernews', function() {

  var titleInput = element(by.model('main.title'));
  var linkInput = element(by.model('main.link'));
  var submitButton = element(by.id('submit'));
  var newsItems = element.all(by.repeater('post in main.post'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('My Angular App!')
  });

  it('has the ability to add to the list', function() {
    titleInput.sendKeys('Harry adds to flappernews');
    submitButton.click();
    expect(newsItems.get(0).getText()).toEqual('0 Harry adds to flappernews');
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
    expect(newsItems.get(0).getText()).toEqual('1 Harry adds to flappernews');
  });

  it('allows you to add a link', function() {
    titleInput.sendKeys('Harry adds link to flappernews');
    linkInput.sendKeys('www.bbc.co.uk');
    submitButton.click();
    expect(newsItems.get(0).getText()).toEqual('0 Harry adds link to flappernews');
  });
});
