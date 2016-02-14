var gulp        = require( 'gulp' );
var runSequence = require( 'run-sequence' );

gulp.task('watch', function() {

    // js
    gulp.watch('app/src/**/*.js',
        function(){ runSequence(
            'babel',
         //   'minify',
            'concat-js',
            'clean')
        });

    // css
    gulp.watch('app/src/**/*.scss',
        function(){ runSequence(
            'concat-sass',
            'sass',
            'clean')
        });

});