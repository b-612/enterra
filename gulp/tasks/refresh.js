'use strict';

module.exports = () => {
  $.gulp.task('refresh', (done) => {
    $.server.reload();
    done();
});
};
