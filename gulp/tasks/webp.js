'use strict';

const webp = require('gulp-webp');

module.exports = () => {
  $.gulp.task('webp', () => {
    return $.gulp.src('source/img/towebp/*')
      .pipe(webp({quality: 99.9}))
      .pipe($.gulp.dest('build/img'));
  });
};
