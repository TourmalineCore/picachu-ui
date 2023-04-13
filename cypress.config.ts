import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    viewportHeight: 600,
    viewportWidth:1000,
    video: false,
    screenshotOnRunFailure: false,
    env: {
      allureLogCypress: false
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
});
