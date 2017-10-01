module.exports = {
  // url comes from nightwatch.conf.js
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    usernameField: {
      selector: '[id=username]'
    },
    passwordField: {
      selector: '[id=password]'
    },
    loginButton: {
      selector: '[id=login-button]'
    }
  }
}
