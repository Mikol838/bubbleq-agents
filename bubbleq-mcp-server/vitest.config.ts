import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      'bubbleq-sdk-ts': resolve(__dirname, '../bubbleq-sdk-ts/index.ts'),
    },
  },
});
