import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Router config
   */
  router: {
    middleware: 'redirect'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }

      {
        rel: 'apple-touch-icon',
        sizes: "180x180",
        href: '/apple-touch-icon.png'
      }, {
        rel: 'icon',
        type: "image/png",
        sizes: "32x32",
        href: '/favicon-32x32.png'
      }, {
        rel: 'icon',
        type: "image/png",
        sizes: "192x192",
        href: '/android-chrome-192x192.png'
      }, {
        rel: 'icon',
        type: "image/png",
        sizes: "16x16",
        href: '/favicon-16x16.png'
      }, {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: "#eac443"
      }, {
        rel: 'preload',
        href: '/fonts/Montserrat-Bold.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      }, {
        rel: 'preload',
        href: '/fonts/Montserrat-Medium.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      }, {
        rel: 'preload',
        href: '/fonts/Montserrat-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      }, {
        rel: 'preload',
        href: '/fonts/Montserrat-SemiBold.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
    }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
