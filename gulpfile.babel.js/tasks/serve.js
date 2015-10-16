import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('serve', () => {
  return browserSync({
    server: {
      baseDir: config.destination
    },
    logLevel: 'info',
    logConnections: true,
    logFileChanges: true,
    injectChanges: false
  });
});
