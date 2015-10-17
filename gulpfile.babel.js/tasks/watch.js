import gulp from 'gulp';
import { svg as config } from '../config';
import watch from 'gulp-watch';
import sequence from 'gulp-sequence';
import browserSync from 'browser-sync';

gulp.task('watch', ['serve'], function () {
  return watch(config.source, () => {
    sequence('build-icons', () => {
      browserSync.reload();
    });
  });
});
