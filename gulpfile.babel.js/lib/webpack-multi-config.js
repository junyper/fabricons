import config from '../config';
import webpack from 'webpack';
import path from 'path';
import webpackManifest from './webpack-manifest';
import postcssTools from 'webpack-postcss-tools';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import postcssImport from 'postcss-import';
import postcssCalc from 'postcss-calc';
import csswring from 'csswring';
import postcssDiscardDuplicates from 'postcss-discard-duplicates';
import CompressionPlugin from 'compression-webpack-plugin';

module.exports = function (env) {
  var publicPath = '/';
  var filename = env === 'production' ? '[name]-[hash].js' : '[name].js';

  var webpackConfig = {
    // context: config.source,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(config.source, 'index.html'), // Load a custom template
        inject: 'body', // Inject all scripts into the body,
        filename: 'index.html'
      })
    ],
    module: {
      preLoaders: [
        {
          test: /\.js?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel?optional=runtime&stage=1',
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json',
          exclude: /node_modules/
        }
      ]
    },
    postcss: [
      // Plugins seem to be first in last out
      // https://github.com/postcss/postcss#plugins
      postcssTools.prependTildesToImports,

      require('autoprefixer')({ browsers: ['last 2 version'] }),
    ]
  };

  if (env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = {
      demo: [
        path.resolve(config.source, 'index.js')
      ]
    };

    webpackConfig.output = {
      path: config.destination,
      filename,
      publicPath
    };

    // Factor out common dependencies into a common.js
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename,
      })
    );
  }

  if (env === 'development') {
    webpackConfig.devtool = 'source-map';
    webpack.debug = true;


    webpackConfig.module.loaders.push(
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
      }
    );
  }

  if (env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, config.destination),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin(),
      new CompressionPlugin({
        asset: '{file}.gz',
        algorithm: 'gzip',
        regExp: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    );

    webpackConfig.module.loaders.push(
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        )
      }
    );

    webpackConfig.postcss = [
      postcssImport,
      postcssCalc()
    ].concat(config.postcss).concat([
      csswring,
      postcssDiscardDuplicates()
    ]);
  }

  return webpackConfig;
};
