import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';
import fs from 'fs';
import sequence from 'gulp-sequence';
import rename from 'gulp-rename';
import config from '../../config';
import handleErrors from '../../lib/handle-errors';
import browserSync from 'browser-sync';
import path from 'path';

var createFontTask = function (variant) {
  var key = 'font-' + variant;
  var taskDir = './gulpfile.babel.js/tasks/generate-fonts/';
  var destination = config.fonts.destination + variant;
  var fontName = config.fonts.fontName + variant;
  var formats = config.fonts.formats;
  var className = config.fonts.className;

  gulp.task(key, () => {
    return gulp.src(config.fonts.source + variant + '/*.svg')
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
          fontPath: path.normalize(path.relative(config.fonts.demoDestination, destination) + '/')
        };
        // build css
        gulp.src(taskDir + 'template.css')
          .pipe(consolidate('lodash', options))
          .on('error', handleErrors)
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest(config.fonts.demoDestination));
        // build example html
        gulp.src(taskDir + 'template.html')
          .pipe(consolidate('lodash', options))
          .on('error', handleErrors)
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest(config.fonts.demoDestination));
      })
      .on('error', handleErrors)
      .pipe(gulp.dest(destination))
      .pipe(browserSync.reload({ stream: true }));
  });
  return key;
};

gulp.task('generate-fonts', ['generate-svgs'], (cb) => {
  var variants = fs.readdirSync(config.fonts.source);
  var tasks = [];

  variants.forEach((variant) => {
    tasks.push(createFontTask(variant));
  });

  sequence(tasks, cb);
});
