const path = require('path');
const Dotenv = require('dotenv-webpack');
const resolvePath = (p) => path.resolve(__dirname, '..', p);

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: resolvePath(`./.env.production`),
    }),
  ],
};
