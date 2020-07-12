// vue.config.js
module.exports = {

configureWebpack: {
    // other webpack options to merge in ...
  },
  // devServer Options don't belong into `configureWebpack`
  devServer: {
    public: '34.219.2.98:8080',
    disableHostCheck: true,
  },
}
