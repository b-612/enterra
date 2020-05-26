'use strict';

module.exports = () => {
  $.gulp.task('copyfonts', () => {
    return $.gulp.src('source/fonts/**/*.{woff,woff2}')
      .pipe($.gulp.dest('build/fonts'));
  });
};
