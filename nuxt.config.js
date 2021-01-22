export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: 'docs',
    fallback: '404.html'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'surfer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/scripts/focus-visible.min.js',  async: true, defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/api-repository.js',
    '~/plugins/multi-tab-state.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/color-mode', '@nuxt/http'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      'postcss-focus-visible': {}
    }
  },
  colorMode: {
    classSuffix: ''
  },
  http: {
    baseURL: process.ENV == 'production' ? 'http://linode.name' : 'http://localhost',
  }
}
