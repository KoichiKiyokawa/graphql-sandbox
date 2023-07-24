import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [{ find: '@/', replacement: '/src/' }],
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: Object.keys(require('./package.json').dependencies).concat(['node:http']),
    },
  },
  test: {
    globalSetup: ['./src/test/setup.ts'],
  },
})
