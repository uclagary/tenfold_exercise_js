const loginToWebsite = function (loginPage, crmPage, username, password) {
  loginPage.waitForElementVisible('@usernameField', 10000, true)
  loginPage.setValue('@usernameField', username)
    .setValue('@passwordField', password)
    .click('@loginButton')

  // Verifying user is signed in by implicitly testing for the presence of the
  // CRM select on the CRM Page.
  crmPage.waitForElementVisible('@crmSelectParent', 10000, true)
}

const selectCRMOption = function (client, crmPage, crmOption) {
  crmPage.click('@crmSelectParent')
    .setValue('@crmOptionField', crmOption)
  client.keys(client.Keys.ENTER)
}

const inputCrmUser = function (crmPage, phonePage, email, password) {
  crmPage.setValue('@emailField', email)
    .setValue('@passwordField', password)
    .click('@saveButton')
  phonePage.waitForElementVisible('@phoneSystemSelectParent', 10000, true)
}

const selectPhoneOption = function (client, phonePage, phoneOption) {
  phonePage.click('@phoneSystemSelectParent')
    .setValue('@phoneOptionField', phoneOption)
  client.keys(client.Keys.ENTER)
}

const inputIp = function (phonePage, ipAddress) {
  phonePage.setValue('@ipField', ipAddress)
}

const inputPhoneUser = function (phonePage, reviewPage, username, password) {
  phonePage.setValue('@usernameField', username)
    .setValue('@passwordField', password)
    .click('@finishButton')
  reviewPage.waitForElementVisible('@usernameValue', 10000, true)
}

const verifyElementText = function (pageObject, element, expectedText) {
  pageObject.expect.element(element).text.to.equal(expectedText)
}

module.exports = {
  loginToWebsite,
  selectCRMOption,
  inputCrmUser,
  selectPhoneOption,
  inputIp,
  inputPhoneUser,
  verifyElementText
}
