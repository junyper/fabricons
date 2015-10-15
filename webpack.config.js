import webpack from 'webpack';
import path from 'path';

const port = '4004';

module.exports = {
  port,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
