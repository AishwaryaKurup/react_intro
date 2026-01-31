import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'node:crypto'

// Patch globalThis.crypto if missing
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = webcrypto
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
