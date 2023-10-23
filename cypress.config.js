const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(_on, config) {
      return config
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
})
