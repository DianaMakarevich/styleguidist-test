const theme = require('./theme.js')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = {
  styleguideDir: 'docs',
  components: 'src/components/**/*.js',
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig = injectBabelPlugin(
      ['import', { libraryName: 'antd', style: true }],
      webpackConfig
    )
    webpackConfig = rewireLess.withLoaderOptions({
      modifyVars: theme,
      javascriptEnabled: true,
    })(webpackConfig, env)
    return webpackConfig
  }
}
