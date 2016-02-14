const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function() {
    return gulp.src('./app/src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./app/build/temp/js/'));
});