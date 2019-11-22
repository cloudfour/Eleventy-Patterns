const gulp = require('gulp');
const browserSync = require('browser-sync').get(
  require('../../package.json').name
);

gulp.task('reload', callback => {
  browserSync.reload();
  callback();
});
