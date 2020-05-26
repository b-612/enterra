'use strict';

module.exports = () => {
const webpackStream = require('webpack-stream');

  $.gulp.task('js', () => {
    return $.gulp.src('source/js/main.js')
      .pipe(webpackStream({
        // mode: 'development',
        mode: 'production',
        devtool: 'eval',
        output: {
          filename: 'main.js',
        },
        module: {
          rules: [
            {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        },
        externals: {
          jquery: 'jQuery'
        }
      }))
      .pipe($.gulp.dest('build/js'))
  });
};
