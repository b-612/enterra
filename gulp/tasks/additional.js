'use strict';

module.exports = () => {
  $.gulp.task('additional', () => {
    return $.gulp.src('source/js/additional/*')
      .pipe($.gulp.dest('build/js/'));
  });
};
