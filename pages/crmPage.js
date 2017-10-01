module.exports = {
  // url comes from nightwatch.conf.js
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    crmSelectParent: {
      selector: '[class=single]'
    },
    crmOptionField: {
      selector: '[autocomplete]'
    },
    emailField: {
      selector: '[id=email]'
    },
    passwordField: {
      selector: '[id=password]'
    },
    saveButton: {
      selector: '[id=save-button]'
    }
  }
}
