'use strict';

const flatten = require('gulp-flatten');

module.exports = () => {
  $.gulp.task('images', () => {
    return $.gulp.src([
      'source/img/*.{png,jpg,svg}',
      'source/img/towebp/*'
    ])
      .pipe($.imagemin([
        $.imagemin.optipng({optimizationLevel: 3}),
        $.imagemin.mozjpeg({progressive: true}),
        $.imagemin.svgo()
      ]))
      .pipe(flatten({
        includeParents: 0
      }))
      .pipe($.gulp.dest('build/img'));
  });
};
