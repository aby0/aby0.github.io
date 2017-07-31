const { join } = require('path')
const { description } = require('./package.json')

module.exports = {
  head: {
    title: 'Somya Anand',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    mode: 'history'
  },

  modules: [
    '@nuxtjs/axios',
    { src: '@nuxtjs/blog', options: {
      static: true,
      markdown: {
        plugins: [require('markdown-it-katex')]
      }
    } }
  ]
}
