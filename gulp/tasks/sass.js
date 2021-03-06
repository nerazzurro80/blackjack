'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/build/temp/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/build/css'));
});