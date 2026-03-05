/*
 * TODO: Update COPYRIGHT in eslint.config.ts, then run `pnpm fix`.
 */
import {defineConfig} from 'vitest/config';

export default defineConfig({
  css: {
    transformer: 'lightningcss',
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    sourcemap: true,
  },
  test: {
    environment: 'node',
  },
});
