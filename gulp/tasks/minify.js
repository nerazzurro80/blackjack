var gulp = require( 'gulp' );
var minify = require('gulp-minify');

gulp.task('minify', function() {
    gulp.src('./app/build/temp/js/**/*.js')
        .pipe(minify({
            exclude: [],
            ignoreFiles: []
        }))
        .pipe(gulp.dest('./app/build/temp/js'))
});