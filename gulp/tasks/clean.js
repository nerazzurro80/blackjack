var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('app/build/temp', {read: false})
        .pipe(clean());
});