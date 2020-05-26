'use strict';

const svgstore = require('gulp-svgstore');

module.exports = () => {
  $.gulp.task ('svgsprite', () => {
    return $.gulp.src('source/img/svgsprite/*')
      .pipe($.imagemin([
        $.imagemin.svgo()
      ]))
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe($.rename('sprite.svg'))
      .pipe($.gulp.dest('build/img'));
  });
};
