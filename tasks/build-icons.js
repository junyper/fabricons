import gulp from 'gulp';
import sequence from 'gulp-sequence';

gulp.task('build-icons', (cb) => {
  sequence(
    [ 'generate-sizes', 'generate-fonts', 'generate-sprites'],
    cb
  );
});
