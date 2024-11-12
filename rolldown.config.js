// @ts-check

import { defineConfig } from 'rolldown';

/**
 * @reference https://github.com/rolldown/rolldown/tree/main/packages/rolldown/src/options
 */
export default defineConfig({
  external: /^node:.*/,
  input: 'src/index.ts',
  output: {
    format: 'es',
    dir: 'api',
  },
});
