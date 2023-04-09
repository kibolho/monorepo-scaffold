import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  format: ['esm', 'cjs'],
  external: ['react'],
});
