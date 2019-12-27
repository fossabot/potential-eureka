const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfiguration = env => require(`./utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is: ${mode}`);

  return webpackMerge(
    {
      mode,
      entry: './src/index.js',
      devServer: {
        hot: true,
        open: true
      },
      output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
        filename: 'bundled.js'
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './static/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
      ]
    },
    modeConfiguration(mode)
  );
};
