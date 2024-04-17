const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // Additional plugins like MiniCssExtractPlugin can be added here
});

