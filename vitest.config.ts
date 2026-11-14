import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: {
      label: 'unit',
      color: 'black',
    },
    include: ['./vitest/**/*.{test,spec}.ts(x)?'],
  },
});
