import gulp from 'gulp';
import fs from 'fs';
import glob from 'glob';
import sequence from 'gulp-sequence';
import consolidate from 'gulp-consolidate';
import rename from 'gulp-rename';
import config from '../../config';
import cheerio from 'gulp-cheerio';
import handleErrors from '../../lib/handle-errors';
import browserSync from 'browser-sync';
import path from 'path';
import webpackStrem from 'webpack-stream';
import named from 'vinyl-named';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'

const capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const taskDir = './gulpfile.babel.js/tasks/generate-react/';

const createReactComponentsTask = function (variant) {
  const key = 'react-components-' + variant;
  const destination = config.react.destination + variant;
  const componentBaseName = config.react.componentBaseName + variant;

  gulp.task(key, () => {
    return gulp.src(config.react.source + variant + '/*.svg')
      .pipe(cheerio({
        run: function ($, file, done) {
          const $svg = $('svg')
          const componentName = componentBaseName + capitalizeFirstLetter(path.basename(file.path, '.svg'))
          const data = {
            name: componentName,
            viewBox: $svg.attr('viewBox'),
            svg: $svg.html()
          }
          return gulp.src(taskDir + 'component.tmpl')
            .pipe(consolidate('lodash', data))
            .pipe(rename({ basename: componentName, extname: '.js' }))
            .on('error', handleErrors)
            .on('end', done)
            .pipe(gulp.dest(destination));
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .on('error', handleErrors)
  });

  return key;
};

const createReactBundle = function (variant) {
  const key = 'react-bundle-' + variant;
  const destination = config.react.destination + variant;

  gulp.task(key, () => {
    const glyphs = glob.sync(destination + '/' + config.react.componentBaseName + '*.js').map((filepath) => {
      return {
        name: path.basename(filepath, '.js')
      }
    });
    return gulp.src(taskDir + 'variant.tmpl')
      .pipe(consolidate('lodash', { glyphs: glyphs }))
      .pipe(rename({ basename: 'index', extname: '.js' }))
      .on('error', handleErrors)
      .pipe(gulp.dest(destination))
  });

  return key;
};

const createReactDemo = function (variant) {
  const key = 'react-demo-' + variant;
  const destination = config.react.destination + variant;

  gulp.task(key, () => {
    const glyphs = glob.sync(destination + '/' + config.react.componentBaseName + '*.js').map((filepath) => {
      return {
        name:  path.basename(filepath, '.js'),
        path: path.relative(destination, filepath)
      }
    });
    return gulp.src(taskDir + 'demo.tmpl')
      .pipe(consolidate('lodash', {
        bundleName: config.libraryName + variant,
        bundlePath: path.relative(config.react.demoDestination, config.react.destination + variant),
        variant,
        glyphs
      }))
      .pipe(rename({ basename: variant, extname: '.js' }))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.react.demoDestination))
      .pipe(browserSync.reload({ stream: true }));
  });

  return key;
};

const createComponentBuild = function (variant) {
  const key = 'react-build-' + variant;
  const destination = config.react.destination + variant;

  gulp.task(key, () => {
    return gulp.src(glob.sync(destination + '/*.js'))
      .pipe(named())
      .pipe(webpackStrem({
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/
            }
          ]
        },
        output: {
          library: config.libraryName + variant,
          libraryTarget: 'umd'
        },
        externals: [
          {
            'react': {
              root: 'React',
              commonjs2: 'react',
              commonjs: 'react',
              amd: 'react'
            }
          },
          {
            'react-dom': {
              root: 'ReactDOM',
              commonjs2: 'react-dom',
              commonjs: 'react-dom',
              amd: 'react-dom'
            }
          }
        ],
        plugins: [
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.optimize.OccurenceOrderPlugin()
        ]
      }))
      .on('error', handleErrors)
      .pipe(gulp.dest(destination))
  });

  return key;
}

const createDemoBuild = function (variant) {
  const key = 'react-demo-build-' + variant;

  gulp.task(key, () => {
    return gulp.src(config.react.demoDestination + variant + '.js')
      .pipe(named())
      .pipe(webpackStrem({
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/
            }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            title: config.libraryName + ' ' + variant + 'React Components',
            template: path.resolve(taskDir, 'template.html'),
            inject: 'body',
            filename: variant + '.html'
          }),
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.optimize.OccurenceOrderPlugin()
        ]
      }))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.react.demoDestination))
  });

  return key;
}

gulp.task('generate-react', ['generate-svgs'], (cb) => {
  const variants = fs.readdirSync(config.react.source);
  const componentTasks = [];
  const bundleTasks = [];
  const demoTasks = [];
  const buildTasks = [];
  const demoBuildTasks = [];

  variants.forEach((variant) => {
    componentTasks.push(createReactComponentsTask(variant));
    bundleTasks.push(createReactBundle(variant));
    buildTasks.push(createComponentBuild(variant));
    demoTasks.push(createReactDemo(variant));
    demoBuildTasks.push(createDemoBuild(variant))
  });

  sequence(componentTasks, bundleTasks, buildTasks, demoTasks, demoBuildTasks, cb);
});
