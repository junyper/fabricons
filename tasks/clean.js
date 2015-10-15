import gulp from 'gulp';
import clean from 'gulp-clean';
import config from '../build.config';

gulp.task('clean', () => {
  gulp.src(config.destination, {read: false}).pipe(clean());
});
