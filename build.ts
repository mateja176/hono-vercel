import { build } from 'esbuild';

await build({
  bundle: true,
  entryPoints: ['src/index.ts'],
  outdir: 'api',
  packages: 'external',
  platform: 'neutral',
});
