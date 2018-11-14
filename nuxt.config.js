module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ssr-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'demo' }
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
    vendor: ['axios','js-cookie','i18n','external_library'],
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
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: [
    [
      '/proxy',
      {
        target: 'https://cnodejs.org/api/v1', // api主机
        pathRewrite: { '^/proxy' : '/' }
      }
    ]
  ],

  plugins: [
    {src: '~plugins/iview', ssr: true},
    {src: '~plugins/axios', ssr: true},
    '~plugins/i18n',
    '~plugins/moment',
    '~plugins/validation'
  ],
  css: [
    '~assets/main.css',
    '~assets/font-awesome/css/font-awesome.min.css'
  ],
  router: {
    middleware: ['i18n','browser','stats']
  }
}

