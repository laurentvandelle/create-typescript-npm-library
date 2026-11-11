import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
    clearMocks: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['**/__snapshots__/**', '**/index.ts', '**/openapi.ts', '**/schemas/**', 'src/**/*.test.ts'],
      reportsDirectory: 'coverage',
      reporter: ['json', 'lcov', 'clover', 'cobertura'],
    },
  },
});
