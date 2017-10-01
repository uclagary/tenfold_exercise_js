# Automation for Tenfold's Exercise Using NightwatchJS

## Installation Steps
1. Clone repo
2. If using Mac, make sure to grab Mac compatible Chromedriver (https://sites.google.com/a/chromium.org/chromedriver/downloads) and replace the existing one in the /bin folder (current one is for Windows)
3. npm install
4. If Nightwatch doesn't execute from the command line, you may have to run `npm install [-g] nightwatch`

## Execution
Simply run:

`nightwatch --config nightwatch.conf.json --tag reviewPage`

This will run the entire e2e test of the site.

You can also use these other tags to test the other 3 pages individually:
`loginPage`
`crmPage`
`phonePage`
