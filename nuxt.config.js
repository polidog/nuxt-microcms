require('dotenv').config()
const { MICROCMS_API_URL, MICROCMS_API_KEY } = process.env

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-microcms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/microcms'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/composition-api',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/http',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  env: {
    MICROCMS_API_URL,
    MICROCMS_API_KEY,
  },

  generate: {
    interval: 2000,
  },
}
