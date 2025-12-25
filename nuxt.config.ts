// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/test-utils',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})