import gulp from 'gulp';
import bump from 'gulp-bump';

gulp.task('bump', function () {
  const cwd = process.cwd()
  return gulp.src([ cwd + '/package.json' ])
    .pipe(bump())
    .pipe(gulp.dest(cwd));
});
