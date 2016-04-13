import gulp from 'gulp';
import consolidate from 'gulp-consolidate';
import fs from 'fs';
import sequence from 'gulp-sequence';
import rename from 'gulp-rename';
import config from '../../config';
import handleErrors from '../../lib/handle-errors';
import browserSync from 'browser-sync';
import glob from 'glob';
import path from 'path';

const taskDir = './gulpfile.babel.js/tasks/generate-sprites-demo/';

const createDemoTask = function (variant) {
  const key = 'demo-sprites-' + variant;

  gulp.task(key, () => {
    const source = path.normalize(config.sprites.destination + variant + '.svg');

    const data = {
      variant: variant,
      sprite: fs.readFileSync(source),
      glyphs: []
    };

    data.glyphs = glob.sync(config.sprites.source + variant + '/*.svg').map((file) => {
      return {
        name: path.basename(file, path.extname(file))
      };
    });

    return gulp.src(taskDir + 'template.html')
      .pipe(consolidate('lodash', data))
      .on('error', handleErrors)
      .pipe(rename({ basename: variant }))
      .pipe(gulp.dest(config.sprites.demoDestination))
      .pipe(browserSync.reload({ stream: true }));
  });
  return key;
};

gulp.task('generate-sprites-demo', (cb) => {
  const variants = fs.readdirSync(config.sprites.source);
  const tasks = [];

  variants.forEach((variant) => {
    tasks.push(createDemoTask(variant));
  });

  sequence(tasks, cb);
});
