import gulp from 'gulp';
import sequence from 'gulp-sequence';
import config from '../config';

gulp.task('build-icons', function (cb) {
  const tasks = [];

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
    'generate-svg-demo',
    'generate-sprites-demo',
    'generate-data',
    cb
  );
});
