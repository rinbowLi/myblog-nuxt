export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  server: {
    port: 3002, // default: 3000
    host: 'localhost' // default: localhost,
  },
  env: {
    baseUrl: process.env.baseUrl
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '我的博客网站',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,minimum-scale=1.0'
      },
      {
        hid: 'description',
        name: 'description',
        content: '这是我的博客网站，分享一些学习与工作经历'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/animate.min.css',
    '@/assets/styles/style.min.css',
    '@assets/styles/iconfont.css'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '@/assets/js/iconfont.js',
      ssr: false
    },
    {
      src: '@/plugins/highlight.js',
      ssr: false
    },
    {
      src: '@/plugins/router.js',
      ssr: false
    },
    {
      src: '@/plugins/eventbus.js',
      ssr: false
    },
    {
      src: '@/plugins/vuex-persist.js',
      ssr: false
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
  }
}
