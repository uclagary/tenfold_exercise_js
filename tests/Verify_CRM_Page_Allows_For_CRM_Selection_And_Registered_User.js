const prereq = require('../helpers/prereqs.js')
const async = require('async')

function loginToWebsite (loginPage, crmPage, username, password) {
  return function (next) {
    prereq.loginToWebsite(loginPage, crmPage, username, password)
    next()
  }
}

function selectCRMOption (client, crmPage, crmOption) {
  return function (next) {
    prereq.selectCRMOption(client, crmPage, crmOption)
    next()
  }
}

function inputCrmUser (crmPage, phonePage, email, password) {
  return function (next) {
    prereq.inputCrmUser(crmPage, phonePage, email, password)
    next()
  }
}

module.exports = {
  '@tags': ['regression', 'crmPage'],
  'Verify CRM Page Allows For CRM Selection And Registered User': function (client) {
    const loginPage = client.page.loginPage()
    const crmPage = client.page.crmPage()
    const phonePage = client.page.phoneSystemPage()
    const username = 'tenfold@tenfold.com'
    const password = '123456'
    const crmOption = 'Salesforce'

    loginPage.navigate()

    async.series([
      loginToWebsite(loginPage, crmPage, username, password),
      selectCRMOption(client, crmPage, crmOption),
      inputCrmUser(crmPage, phonePage, username, password)
    ], function (err) {
      if (err) {
        throw Error(err)
      }
      client.end()
    })
  }
}
