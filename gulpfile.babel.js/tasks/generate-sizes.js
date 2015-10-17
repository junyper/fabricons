import gulp from 'gulp';
import cheerio from 'gulp-cheerio';
import rename from 'gulp-rename';
import sequence from 'gulp-sequence';
import convert from 'gulp-rsvg';
import fs from 'fs';
import handleErrors from '../lib/handle-errors';
import browserSync from 'browser-sync';

import { svg as config } from '../config';

var getUnits = function (size, box) {
  // Hard coded to 1920 x 1920 SVGs…
  var boxDelta = box - size;
  var boundingUnits = ((1920 / size) * boxDelta);
  var viewBoxValue = 1920 + boundingUnits;
  var translateDiff = boundingUnits / 2;

  return {
    viewBox: `0 0 ${viewBoxValue} ${viewBoxValue}`,
    translate: `translate(${translateDiff} ${translateDiff})`
  };
};

var createSizeTask = function (variant, size) {
  var key = variant + '-' + size.name;
  var units = getUnits(size.size, size.box);
  var path = config.destination + variant;

  gulp.task(key, () => {
    gulp.src(path + '/*.svg')
    .pipe(rename({
      suffix: size.suffix
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
    .on('error', handleErrors)
    .pipe(gulp.dest(path + '/ios/'))

    .pipe(browserSync.reload({ stream: true }));
  });
  return key;
};


gulp.task('generate-sizes', ['generate-svgs'], function (cb) {
  var variants = fs.readdirSync(config.destination);
  var sizeTasks = [];

  variants.forEach((variant) => {
    config.sizes.forEach((size) => {
      sizeTasks.push(
        createSizeTask(variant, size)
      );
    });
  });

  sequence(sizeTasks, cb);
});
