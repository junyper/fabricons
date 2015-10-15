import gulp from 'gulp';
import { svg as config } from '../build.config';

gulp.task('watch', () => {
  gulp.watch(
    config.source,
    { debounceDelay: 3000 },
    [ 'build-icons' ]
  );
});
