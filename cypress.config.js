
const { defineConfig } = require ('cypress')

module.exports = defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1600,
  e2e: {
// e2e options here
defaultCommandTimeout:20000,
pageLoadTimeout: 120000,
  }
})


