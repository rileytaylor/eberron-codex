module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'eberron-codex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '5eTools for Eberron with Nuxt.js' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    }
  },
  modules: [
    '@nuxtjs/bootstrap-vue'
  ],
  vendor: [
    'vue-multiselect'
  ]
}
