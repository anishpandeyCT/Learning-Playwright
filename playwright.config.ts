import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

export default defineConfig({
  testDir: "./tests",

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  //forbidOnly: !!process.env.CI,

  //retries: process.env.CI ? 2 : 0,

  //workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["html", { outputFolder: "reports/html", open: "never" }],
    ["json", { outputFile: "reports/json/report.json" }],
    ["list"],
    ["allure-playwright"]
  ],

  use: {
    baseURL: process.env.BASE_URL,

    headless: false,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "on-first-retry",

    actionTimeout: 10000,

    navigationTimeout: 30000,
  },

  projects: [
    {
      name: "Chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

  ],

  outputDir: "test-results/",
});