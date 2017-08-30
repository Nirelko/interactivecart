import webpack, { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join } from 'path';

const clientPort = 8000;

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './app/client/index.js'
  ],
  output: {
    path: join(__dirname, './dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin()
  ],
  resolve: {
    extensions: [
      '.js',
      '.css',
      '.html'
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    port: clientPort,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
};