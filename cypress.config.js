const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ed9ho1",
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  overwrite: false,
  html: true,
  json: true,
  
  failOnStatusCode: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      
      
      // implement node event listeners here
    },
   
    
  },
  
  
});
