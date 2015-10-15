
import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

gulp.task('webpack-dev-server', () => {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(config.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.port);
  });
});
