const { merge: webpackMerge } = require('webapck-merge');
const commonConfig = require('./webpack/webpack.config.base');

module.exports = function(env) {
  // 환경변수에 따른 config 가져오기
  const webpackConfig = require(`./webpack/webpack.${env}.js`);

  return webpackMerge(commonConfig, webpackConfig);
};