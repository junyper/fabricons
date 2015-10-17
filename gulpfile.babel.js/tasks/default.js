import gulp from 'gulp';
import sequence from 'gulp-sequence';

gulp.task('default', function (cb) {
  sequence('clean', 'build-icons', 'generate-data', 'webpack-watch', 'watch', cb);
});
