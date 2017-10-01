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

function selectPhoneOption (client, phonePage, phoneOption) {
  return function (next) {
    prereq.selectPhoneOption(client, phonePage, phoneOption)
    next()
  }
}

function inputIp (phonePage, ipAddress) {
  return function (next) {
    prereq.inputIp(phonePage, ipAddress)
    next()
  }
}

function inputPhoneUser (phonePage, reviewPage, username, password) {
  return function (next) {
    prereq.inputPhoneUser(phonePage, reviewPage, username, password)
    next()
  }
}

function verifyElementText (pageObject, element, expectedText) {
  return function (next) {
    prereq.verifyElementText(pageObject, element, expectedText)
    next()
  }
}

module.exports = {
  '@tags': ['regression', 'reviewPage'],
  'Verify Expected Input Values Are Shown on Review Page': function (client) {
    const loginPage = client.page.loginPage()
    const crmPage = client.page.crmPage()
    const phonePage = client.page.phoneSystemPage()
    const reviewPage = client.page.reviewPage()
    const username = 'tenfold@tenfold.com'
    const password = '123456'
    const crmOption = 'Salesforce'
    const phoneOption = 'Broadsoft'
    const ipAddress = '1.1.1.1'

    loginPage.navigate()

    async.series([
      loginToWebsite(loginPage, crmPage, username, password),
      selectCRMOption(client, crmPage, crmOption),
      inputCrmUser(crmPage, phonePage, username, password),
      selectPhoneOption(client, phonePage, phoneOption),
      inputIp(phonePage, ipAddress),
      inputPhoneUser(phonePage, reviewPage, username, password),
      verifyElementText(reviewPage, '@navbarText', 'Tenfold - QA Enginner Test'),
      verifyElementText(reviewPage, '@usernameValue', 'tenfold@tenfold.com')
    ], function (err) {
      if (err) {
        throw Error(err)
      }
      client.end()
    })
  }
}
