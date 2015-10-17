import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('serve', function () {
  return browserSync({
    server: {
      baseDir: config.destination
    },
    reloadOnRestart: true,
    logLevel: 'info',
    logConnections: true,
    logFileChanges: true,
    injectChanges: false
  });
});
