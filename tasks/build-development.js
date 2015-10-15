import gulp from 'gulp';
import sequence from 'gulp-sequence';

gulp.task('build-development', (cb) => {
  sequence(
    'clean',
    'build-icons',
    [ 'webpack-dev-server', 'watch' ],
    cb
  );
});
