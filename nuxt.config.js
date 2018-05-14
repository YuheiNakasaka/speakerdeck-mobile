module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mobile Speaker Deck',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Unofficial mobile viewer for Speaker Deck' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  mode: 'spa',
  generate: {
    fallback: true,
  },
  router: {
    fallback: true,
  },
  modules: [
    '@nuxtjs/pwa',
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
}
