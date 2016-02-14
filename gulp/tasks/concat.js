var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-js', function() {
    return gulp.src([
            './app/bower-components/angular/angular.min.js',
            './app/bower-components/angular-route/angular-route.min.js',
            './app/build/temp/js/**/*.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./app/build/js/'));
});

gulp.task('concat-sass', function() {
    return gulp.src([
            './app/src/**/*.scss'
        ])
        .pipe(concat('main.scss'))
        .pipe(gulp.dest('./app/build/temp/'));
});