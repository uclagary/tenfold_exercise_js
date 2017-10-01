module.exports = {
  // url comes from nightwatch.conf.js
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    usernameValue: {
      selector: 'app-review span'
    },
    navbarText: {
      selector: '.navbar-brand'
    }
  }
}
