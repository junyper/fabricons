import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';
import fs from 'fs';
import sequence from 'gulp-sequence';
import rename from 'gulp-rename';
import { fonts as config } from '../../build.config';

var createFontTask = (variant) => {
  var key = 'font-' + variant,
      taskDir = './tasks/generate-fonts/',
      destination = config.destination + variant,
      fontName = config.fontName + variant,
      formats = config.formats,
      className = config.className;

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
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest(destination));
        // build example html
        gulp.src(taskDir + 'template.html')
          .pipe(consolidate('lodash', options))
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest(destination));
      })
      .pipe(gulp.dest(destination));
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
