const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://trade.mb.io",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 20000,
    responseTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 0
    },
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "spec, mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    }
  }
});