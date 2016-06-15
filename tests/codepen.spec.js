module.exports = {
  beforeEach: function(browser) {
    browser
      .url('http://s.codepen.io/jplhomer/debug/437e7fdb776ad5e28ac86c4ccc078400')
      .waitForElementPresent('body', 1000);
  },
  'User cannot submit form without a password': function(browser) {
    browser
      .setValue('#email', 'jplhomer@gmail.com')
      .submitForm('#form')
      .assert.elementPresent('#error')
      .assert.containsText('#error', 'You have empty inputs: password')
      .end();
  },
  'User cannot submit form without an email': function(browser) {
    browser
      .setValue('#password', 'danceparty')
      .submitForm('#form')
      .assert.elementPresent('#error')
      .assert.containsText('#error', 'You have empty inputs: email')
      .end();
  }
};
