// 见http://vuejs-templates.github。io / webpack文档。
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // 默认Gzip关闭等许多流行的静态主机
    // 增加或Netlify已经gzip所有静态资产。
    //设置为‘真’之前,确保:
    // npm安装——save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    //运行构建命令和一个额外的参数
    //查看包分析器建造完成后的报告:
    //“npm运行构建,报告”
    //设置为“真”或“假”总是打开或关闭
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    //默认CSS Sourcemaps关闭,因为相对路径是“轮子”
    //这个选项,根据CSS-Loader README
    //(https://github.com/webpack/css-loader # sourcemaps)
    //在我们的经验中,他们通常按预期工作,
    //只是意识到这个问题时启用这个选项。
    cssSourceMap: false
  }
}
