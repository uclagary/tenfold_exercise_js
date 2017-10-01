module.exports = {
  // url comes from nightwatch.conf.js
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    phoneSystemSelectParent: {
      selector: '[class=single]'
    },
    phoneOptionField: {
      selector: '[autocomplete]'
    },
    ipField: {
      selector: '[id=ip]'
    },
    usernameField: {
      selector: '[id=username]'
    },
    passwordField: {
      selector: '[id=password]'
    },
    finishButton: {
      selector: '[id=finish-button]'
    }
  }
}
