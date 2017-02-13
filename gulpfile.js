'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./assets/css/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./site/css'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/css/*.sass', ['sass']);
});

gulp.task('default', ['watch']);
