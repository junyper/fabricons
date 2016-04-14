import gulp from 'gulp';
import config from '../config';
import pages from 'gulp-gh-pages'

gulp.task('deploy', ['build', 'webpack'], function () {
  return gulp.src(config.destination + '**/*')
    .pipe(pages())
});
