import gulp from 'gulp';
import jeditor from 'gulp-json-editor';
import config from '../config';
import spawn from 'gulp-spawn';

gulp.task('release', ['build'], function () {
  const cwd = process.cwd()
  return gulp.src([ cwd + '/package.json' ])
    .pipe(jeditor(function (json) {
      delete json.devDependencies
      return json
    }))
    .pipe(gulp.dest(config.destination))
    .pipe(spawn({
      cmd: 'cp',
      args: [
        'README.md',
        config.destination
      ]
    }))
    .pipe(spawn({
      cmd: 'npm',
      args: [
        'publish',
        config.destination
      ]
    }))
});
