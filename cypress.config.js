// cypress.config.js
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    baseUrl: "https://magento.softwaretestingboard.com/",
    video: false,
    specPattern: "cypress/e2e/features/*.feature",
    excludeSpecPattern: ["*.js"],
  },

  viewportWidth: 1280,
  viewportHeight: 800,
  requestTimeout: 50000,
  responseTimeout: 50000,
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 20000,
  numTestsKeptInMemory: 0,

  retries: {
    runMode: 1,
    openMode: 0,
  },
});
