import gulp from 'gulp';
import { svg as config } from '../config';
import watch from 'gulp-watch';
import sequence from 'gulp-sequence';
import browserSync from 'browser-sync';
import path from 'path';

gulp.task('watch', ['serve'], () => {
  return watch(path.normalize(config.source), () => {
    sequence('build-icons', () => {
      browserSync.reload();
    });
  });
});
