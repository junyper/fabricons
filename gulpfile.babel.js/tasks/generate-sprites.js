import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import sequence from 'gulp-sequence';
import fs from 'fs';
import { sprites as config } from '../config';
import handleErrors from '../lib/handle-errors';
import browserSync from 'browser-sync';

var createSpriteTask = (variant) => {
  var key = 'sprite-' + variant;

  gulp.task(key, () => {
    return gulp.src(config.source + variant + '/*.svg')
      .pipe(svgstore())
      .on('error', handleErrors)
      .pipe(gulp.dest(config.destination))
      .pipe(browserSync.reload({ stream: true }));
  });
  return key;
};

gulp.task('generate-sprites', ['generate-svgs'], (cb) => {
  var variants = fs.readdirSync(config.source);
  var spriteTasks = [];

  variants.forEach((variant) => {
    spriteTasks.push(createSpriteTask(variant));
  });

  sequence(spriteTasks, cb);
});
