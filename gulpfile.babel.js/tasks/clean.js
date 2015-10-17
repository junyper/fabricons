import gulp from 'gulp';
import clean from 'gulp-clean';
import config from '../config';

gulp.task('clean', function () {
  return gulp.src(config.destination, { read: false }).pipe(clean());
});
