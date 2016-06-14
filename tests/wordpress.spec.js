module.exports = {
  beforeEach: function(browser) {
    browser
      .url('http://localhost:8080/?p=1')
      .waitForElementPresent('body', 1000);
  },
  'A comment should be posted': function(browser) {
    var myText = 'This is a fun comment on ' + new Date().getTime();
    browser
      .setValue('#comment', myText)
      .setValue('#author', 'Joe Smith')
      .setValue('#email', 'joe.smith@gmail.com')
      .setValue('#url', 'joesmith.com')
      .submitForm('#commentform')
      .pause(1000)
      .assert.elementPresent('.comment-content')
      .assert.containsText('.comment-list li:last-child .comment-content', myText)
      .end();
  }
};
