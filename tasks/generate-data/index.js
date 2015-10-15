import gulp from 'gulp';
import fs from 'fs';
import jeditor from 'gulp-json-editor';
import rename from 'gulp-rename';
import config from '../../build.config';
import glob from 'glob';
import path from 'path';

gulp.task('generate-data', ['generate-svgs'], () => {
  return gulp.src('./tasks/generate-data/template.json')
    .pipe(jeditor({
      icons: glob.sync(config.svg.source).map((file) => path.basename(file, path.extname(file))),
      variants: fs.readdirSync(config.svg.destination),
      sizes: config.svg.sizes,
      sprites: !!config.sprites,
      fonts: !!config.fonts
    }))
    .pipe(rename('data.json'))
    .pipe(gulp.dest(config.destination));
});
