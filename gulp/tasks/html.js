'use strict';

const htmlmin = require('gulp-htmlmin');

module.exports = () => {
  $.gulp.task('html', () => {
    return $.gulp.src("source/**/*.html")
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe($.gulp.dest("build"));
  });
};
