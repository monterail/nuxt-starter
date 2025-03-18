// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  }
})