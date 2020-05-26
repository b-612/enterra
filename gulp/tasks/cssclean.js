'use strict';

module.exports = () => {
  $.gulp.task('cssclean', () => {
    return $.del('build/css');
  });
};
