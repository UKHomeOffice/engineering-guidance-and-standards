const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('task', {
        log(...args) {console.log(...args); return null},
        table(table) {console.table(table); return null},
      })
    },
  },
});
