import gulp from 'gulp';
import sequence from 'gulp-sequence';
import config from '../config';

gulp.task('build-icons', function (cb) {
  const tasks = [];
  const demos = ['generate-svg-demo']

  if (config.react) {
    tasks.push('generate-react');
    // demos.push('generate-react-demos');
  }

  if (config.fonts) {
    tasks.push('generate-fonts');
  }

  if (config.sprites) {
    tasks.push('generate-sprites');
    demos.push('generate-sprites-demo');
  }

  if (config.svg.sizes && config.svg.sizes.length > 0) {
    tasks.push('generate-sizes');
  }

  sequence(
    tasks,
    demos,
    'generate-data',
    cb
  );
});
