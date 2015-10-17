import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';
import fs from 'fs';
import sequence from 'gulp-sequence';
import rename from 'gulp-rename';
import { fonts as config } from '../../config';
import handleErrors from '../../lib/handle-errors';
import browserSync from 'browser-sync';

var createFontTask = function (variant) {
  var key = 'font-' + variant;
  var taskDir = './gulpfile.babel.js/tasks/generate-fonts/';
  var destination = config.destination + variant;
  var fontName = config.fontName + variant;
  var formats = config.formats;
  var className = config.className;

  gulp.task(key, () => {
    return gulp.src(config.source + variant + '/*.svg')
      // generate font
      .pipe(iconfont({
        svg: true,
        fontName,
        formats
      }))
      .on('glyphs', (glyphs) => {
        var options = {
          glyphs: glyphs.map((glyph) => {
            return {
              name: glyph.name,
              codepoint: glyph.unicode[0].charCodeAt(0)
            };
          }),
          fontName,
          className,
          fontPath: ''
        };
        // build css
        gulp.src(taskDir + 'template.css')
          .pipe(consolidate('lodash', options))
          .on('error', handleErrors)
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest(destination));
        // build example html
        gulp.src(taskDir + 'template.html')
          .pipe(consolidate('lodash', options))
          .on('error', handleErrors)
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest(destination));
      })
      .on('error', handleErrors)
      .pipe(gulp.dest(destination))
      .pipe(browserSync.reload({ stream: true }));
  });
  return key;
};

gulp.task('generate-fonts', ['generate-svgs'], (cb) => {
  var variants = fs.readdirSync(config.source);
  var tasks = [];

  variants.forEach((variant) => {
    tasks.push(createFontTask(variant));
  });

  sequence(tasks, cb);
});
