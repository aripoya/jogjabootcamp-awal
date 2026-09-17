import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { mkdirSync, readFileSync, renameSync, existsSync, writeFileSync } from 'fs'
import { WHATSAPP_NUMBER } from './src/config'

// Plugin: setelah build, pindahkan React app ke /quiz/ dan taruh landing page statis di /
function landingPagePlugin() {
  return {
    name: 'landing-page-plugin',
    closeBundle() {
      const distDir = resolve(__dirname, 'dist')
      const quizDir = resolve(distDir, 'quiz')
      const reactIndex = resolve(distDir, 'index.html')
      const landingSource = resolve(__dirname, 'public', 'index.html')

      // Buat folder quiz/ di dist/
      if (!existsSync(quizDir)) {
        mkdirSync(quizDir, { recursive: true })
      }

      // Pindahkan React index.html ke quiz/index.html
      if (existsSync(reactIndex)) {
        renameSync(reactIndex, resolve(quizDir, 'index.html'))
      }

      // Copy landing page statis ke dist/index.html, sekalian isi nomor WhatsApp dari src/config.ts
      if (existsSync(landingSource)) {
        const landingHtml = readFileSync(landingSource, 'utf-8').replaceAll('{{WHATSAPP_NUMBER}}', WHATSAPP_NUMBER)
        writeFileSync(resolve(distDir, 'index.html'), landingHtml)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), landingPagePlugin()],
})
