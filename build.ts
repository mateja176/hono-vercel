await Bun.build({
  entrypoints: ['src/index.ts'],
  format: 'esm',
  outdir: 'api',
  target: 'node',
});
