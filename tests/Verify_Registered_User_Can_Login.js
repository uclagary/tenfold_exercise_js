const prereq = require('../helpers/prereqs.js')
const async = require('async')

function loginToWebsite (loginPage, crmPage, username, password) {
  return function (next) {
    prereq.loginToWebsite(loginPage, crmPage, username, password)
    next()
  }
}

module.exports = {
  '@tags': ['regression', 'loginPage'],
  'Verify Registered User Can Login': function (client) {
    const loginPage = client.page.loginPage()
    const crmPage = client.page.crmPage()
    const username = 'tenfold@tenfold.com'
    const password = '123456'

    loginPage.navigate()

    async.series([
      loginToWebsite(loginPage, crmPage, username, password)
    ], function (err) {
      if (err) {
        throw Error(err)
      }
      client.end()
    })
  }
}
