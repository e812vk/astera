// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-file-storage'],
  fileStorage: {
    mount: process.env.VITE_STORAGE
  },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})