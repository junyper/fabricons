import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import sequence from 'gulp-sequence';
import fs from 'fs';
import { sprites as config } from '../build.config';

var createSpriteTask = (variant) => {
  var key = 'sprite-' + variant;

  gulp.task(key, () => {
    return gulp.src(config.source + variant + '/*.svg')
      .pipe(svgstore())
      .pipe(gulp.dest(config.destination));
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
