const path = require('path');
const Dotenv = require('dotenv-webpack');
const resolvePath = (p) => path.resolve(__dirname, '..', p);

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    // static: './dist',
    hot: true,
  },
  plugins: [
    new Dotenv({
      path: resolvePath(`./.env.development`),
    }),
  ],
};
