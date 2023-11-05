// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'light'
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  }
})
