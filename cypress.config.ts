import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/webdev-portfolio/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    viewportWidth: 1280,
    viewportHeight: 800,
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
