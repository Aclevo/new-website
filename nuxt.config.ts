// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/test-utils',
  ],
   vite: {
    plugins: [tailwindcss()],
  },
  css: ['./assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})