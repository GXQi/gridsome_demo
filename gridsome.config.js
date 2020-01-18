// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "GXQi's Blog",
  siteDescription: 'A simple blog designed with Gridsome',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Post',
      path: './content/posts/**/*.md',
      route: '/blog/:slug'
    }
  }]
  // templates: {
  //   BlogPost: '/blog/:year/:month/:day/:slug'
  // }
}
