import gulp from 'gulp';
import consolidate from 'gulp-consolidate';
import fs from 'fs';
import sequence from 'gulp-sequence';
import rename from 'gulp-rename';
import config from '../../config';
import handleErrors from '../../lib/handle-errors';
import browserSync from 'browser-sync';
import glob from 'glob';
import path from 'path';

var taskDir = './gulpfile.babel.js/tasks/generate-demo/';

var createDemoTask = function (size, variants) {
  var key = 'demo-' + size.name;
  var destination = config.svg.destination;

  gulp.task(key, () => {
    var data = {
      size: `${size.name} ${size.size}pt (${size.box}pt box)`,
      variants: []
    };

    variants.forEach((variant) => {
      var variantData = {
        name: variant
      };
      var source = path.normalize(destination + variant + '/android/*' + size.suffix + '.svg');

      variantData.glyphs = glob.sync(source).map((file) => {
        return {
          path: path.relative(config.destination, file),
          name: path.basename(file)
        };
      });
      data.variants.push(variantData);
    });

    return gulp.src(taskDir + 'template.html')
      .pipe(consolidate('lodash', data))
      .on('error', handleErrors)
      .pipe(rename({ basename: size.name }))
      .pipe(gulp.dest(config.svg.demoDestination))
      .pipe(browserSync.reload({ stream: true }));
  });
  return key;
};

gulp.task('generate-demo', (cb) => {
  var variants = fs.readdirSync(config.svg.destination);
  var tasks = [];

  config.svg.sizes.forEach((size) => {
    tasks.push(
      createDemoTask(size, variants)
    );
  });

  sequence(tasks, cb);
});
