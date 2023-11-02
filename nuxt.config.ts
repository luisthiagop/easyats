// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  }
})
