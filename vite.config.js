import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  base :"/gridlayout/",
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}