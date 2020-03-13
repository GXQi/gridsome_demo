// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
var path = require('path')

module.exports = {
  siteName: "GXQi's Blog",
  siteDescription: 'A simple blog designed with Gridsome',
  siteUrl: 'https://gxqi.github.io',
  pathPrefix: '/gridsome_demo',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Post',
      path: 'blog/*.md',
      // route: '/blog/:slug'
      refs: {
        tags: {
          typeName: 'Tag',
          create: true,
          route: '/tag/:id'
        }
      }
    }
  }],
  chainWebpack: config => {
    // 添加全局.styl文件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => { //匹配到所有需要导入的文件
      config.module.rule('stylus').oneOf(type).use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [
            path.resolve(__dirname, 'src/assets/variable.styl')
          ]
        })
    })
  }
}
