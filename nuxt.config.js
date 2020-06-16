const fs = require('fs');
const path = require('path');

/**
  * Markdown documents route
  */

var files = fs.readdirSync('./docs');
function createRoutesArray() {
  files.forEach(function (file) {
    var name = file.substr(0, file.lastIndexOf('.'));
    var route = '/docs/' + name
    routesArray.push(route)
  });
}

function returnRoutes() {
  dir.readFiles('./docs', {
    match: /.md$/,
    shortName: true,
    exclude: /^\./
  }, function (err, content, next) {
    if (err) throw err;
    // console.log('content:', content);
    next();
  },
    function (err, files) {
      if (err) throw err;
      // fileNamesArray = [];
      files.forEach(function (file) {
        var name = file.substr(0, file.lastIndexOf('.'));
        var path = '/docs/' + name
        return path
      });
    });
}

function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/docs/${slug}`
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Funish CSS' + ' | ' + process.env.npm_package_description || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.0/build/styles/dark.min.css"
      }
    ],
    script: [
      {
        src: "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.0/build/highlight.min.js", async: true, defer: true
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/src/funish.scss',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/markdownit'],
  markdownit: {
    injected: true,
    linkify: true,
    typographer: true,
  },
  /*
  ** Build configuration
  */
  generate: {
    dir: "public",
    routes: function () {
      return files.map(getSlugs)
    }
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    extractCSS: true
  }
}