import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: {
        main: './src/main.ts',
        exports: './src/exports/index.ts',
      },
      formats: ['es'], 
    },
  },
})
