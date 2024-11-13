import { build } from 'esbuild';

await build({
  banner: { js: "export const config = { runtime: 'edge' }" },
  bundle: true,
  entryPoints: ['src/index.ts'],
  outdir: 'api',
  packages: 'external',
  platform: 'neutral',
});
