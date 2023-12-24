const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const resolvePath = (p) => path.resolve(__dirname, '..', p);

module.exports = {
  entry: resolvePath('./src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.tsx', '.ts', '.js'],
        configFile: resolvePath('tsconfig.json'),
      }),
    ],
  },
  output: {
    path: resolvePath('./build'),
    filename: '[name].bundle.[hash].js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('./public/index.html'),
    }),
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        {
          from: resolvePath('public/assets'),
          to: 'assets',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        generator: {
          filename: 'styles/[name][ext]',
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
};
