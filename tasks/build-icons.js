import gulp from 'gulp';
import sequence from 'gulp-sequence';
import config from '../build.config';

gulp.task('build-icons', (cb) => {
  var tasks = [ 'generate-data' ];

  if (config.fonts) {
    tasks.push('generate-fonts');
  }

  if (config.sprites) {
    tasks.push('generate-sprites');
  }

  if (config.svg.sizes && config.svg.sizes.length > 0) {
    tasks.push('generate-sizes');
  }

  sequence(
    tasks,
    cb
  );
});
