// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
      mysqlHost: "mysql",
      mysqlPort: 3306,
      database: "AdSystem",
      mysqlUser: "adUser",
      mysqlPass: "adPass"
  },
  modules: ['@pinia/nuxt']
})
