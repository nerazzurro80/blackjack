var gulp        = require( 'gulp' );
var templateCache = require('gulp-angular-templatecache');

gulp.task('templates', function () {
    return gulp.src('app/src/**/*.html')
        .pipe(templateCache( { module:'templateCache', standalone:true }))
        .pipe(gulp.dest('app/build/temp/js/'));
});

