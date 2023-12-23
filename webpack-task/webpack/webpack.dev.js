const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify('http://localhost:8001'),
    }),
  ],
  devServer: {
    // static: './dist',
    hot: true,
  },
};
