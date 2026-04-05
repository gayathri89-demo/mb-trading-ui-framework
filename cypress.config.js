const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://trade.mb.io",
      setupNodeEvents(on, config) {
      if (config.browser && config.browser.name === "firefox") {
        config.video = false;
        config.videoCompression = false;
      }
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 120000,
    requestTimeout: 30000,
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
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: false,
      json: true
    },
       env: {
      tradeHomepageUrl: "https://trade.mb.io/homepage",
      exploreUrl: "https://mb.io/en-AE/explore",
      bannersUrl: "https://mb.io/en-AE"
    }

  }
});