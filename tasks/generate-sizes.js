import gulp from 'gulp';
import cheerio from 'gulp-cheerio';
import rename from 'gulp-rename';
import sequence from 'gulp-sequence';
import convert from 'gulp-rsvg';
import fs from 'fs';

import { svg as config } from '../build.config';

var getUnits = (size, box) => {
  // Hard coded to 1920 x 1920 SVGs…
  var boxDelta = box - size,
      boundingUnits = ((1920 / size) * boxDelta),
      viewBoxValue = 1920 + boundingUnits,
      translateDiff = boundingUnits / 2;
  return {
    viewBox: `0 0 ${viewBoxValue} ${viewBoxValue}`,
    translate: `translate(${translateDiff} ${translateDiff})`
  };
};

var createSizeTask = (variant, size) => {
  var key = variant + '-' + size.name,
      units = getUnits(size.size, size.box),
      path = config.destination + variant;

  gulp.task(key, () => {
    gulp.src(path + '/*.svg')
    .pipe(rename({
      suffix: '_' + size.name
    }))
    .pipe(cheerio({
      run: ($, file, done) => {
        $('svg').attr({
          'height': size.box + 'pt',
          'width': size.box + 'pt'
        }).attr({
          'viewBox': units.viewBox
        });
        $('svg > g').attr({
          'transform': units.translate
        });
        done();
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    .pipe(gulp.dest(path + '/android/'))
    .pipe(cheerio({
      run: ($, file, done) => {
        $('svg').attr({
          'height': size.box + 'px',
          'width': size.box + 'px'
        });
        done();
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    .pipe(convert({ format: 'pdf' }))
    .pipe(gulp.dest(path + '/ios/'));
  });
  return key;
};


gulp.task('generate-sizes', ['generate-svgs'], (cb) => {
  var variants = fs.readdirSync(config.destination),
      sizeTasks = [];

  variants.forEach((variant) => {
    config.sizes.forEach((size) => {
      sizeTasks.push(
        createSizeTask(variant, size)
      );
    });
  });

  sequence(sizeTasks, cb);
});
