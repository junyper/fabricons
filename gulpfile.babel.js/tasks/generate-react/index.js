import gulp from 'gulp';
import fs from 'fs';
import sequence from 'gulp-sequence';
import consolidate from 'gulp-consolidate';
import rename from 'gulp-rename';
import config from '../../config';
import cheerio from 'gulp-cheerio';
import handleErrors from '../../lib/handle-errors';
import browserSync from 'browser-sync';
import path from 'path';


function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createReactTask = function (variant) {
  const key = 'react-' + variant;
  const taskDir = './gulpfile.babel.js/tasks/generate-react/';
  const destination = config.react.destination + variant;
  const componentBaseName = config.react.componentBaseName + variant;

  gulp.task(key, () => {
    return gulp.src(config.react.source + variant + '/*.svg')
      .pipe(cheerio({
        run: function ($, file) {
          const $svg = $('svg')
          const componentName = componentBaseName + capitalizeFirstLetter(path.basename(file.path, '.svg'))
          const data = {
            name: componentName,
            viewBox: $svg.attr('viewBox'),
            svg: $svg.html()
          }
          return gulp.src(taskDir + 'template.tmpl')
            .pipe(consolidate('lodash', data))
            .on('error', handleErrors)
            .pipe(rename({ basename: componentName, extname: '.js' }))
            .pipe(gulp.dest(destination));
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .on('error', handleErrors)
      .pipe(browserSync.reload({ stream: true }));
  });
  return key;
};

gulp.task('generate-react', ['generate-svgs'], (cb) => {
  const variants = fs.readdirSync(config.react.source);
  const tasks = [];

  variants.forEach((variant) => {
    tasks.push(createReactTask(variant));
  });

  sequence(tasks, cb);
});
