'use strict';

global.$ = {
  path: {
    task: require('./gulp/path/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  rename: require('gulp-rename'),
  output: {
    sourcemap: require('gulp-sourcemaps'),
  },
  server: require('browser-sync').create(),
  imagemin: require('gulp-imagemin'),
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
    'clean',
    'copyfonts',
    'html',
    'images',
    'webp',
    'svgsprite',
    'cssclean',
    'css',
    'js',
    'additional'
));

$.gulp.task('start', $.gulp.series('build', 'server'));
