// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', 'nuxt-gtag'],
  colorMode: {
    preference: 'light'
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  gtag: {
    id: 'G-SX64L9WTH1'
  }
})
