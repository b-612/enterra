'use strict';

module.exports = () => {
  $.gulp.task('server', () => {
    $.server.init({
      server: 'build/',
      notify: false,
      open: true,
      cors: true,
      ui: false
    });

    $.gulp.watch('source/sass/custom/**/*.{scss,sass}', $.gulp.series('cssclean', 'css'));
    $.gulp.watch('source/*.html', $.gulp.series('html')).on('change', $.server.reload);
    $.gulp.watch('source/img/svgsprite', $.gulp.series('svgsprite', 'refresh'));
    $.gulp.watch('source/js/**/*.js', $.gulp.series('js', 'refresh'));
  });
};
