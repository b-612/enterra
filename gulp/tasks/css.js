'use strict';

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const csso = require('gulp-csso');

module.exports = () => {
  $.gulp.task('css', () => {
    return $.gulp.src([
      'source/sass/custom/style.scss'
    ])
      .pipe(plumber())
      .pipe($.output.sourcemap.init())
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(postcss([
        autoprefixer()
      ]))
      .pipe($.gulp.dest('build/css/'))
      .pipe($.output.sourcemap.init())
      .pipe(csso())
      .pipe($.rename({
        suffix: '.min',
        extname: '.css'
      }))
      .pipe($.output.sourcemap.write('.'))
      .pipe($.gulp.dest('build/css/'))
      .pipe($.server.stream());
  });
};
