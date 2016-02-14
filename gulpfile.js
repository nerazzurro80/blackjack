var gulp        = require( 'gulp' );
var runSequence = require( 'run-sequence' );
var requireDir  = require( 'require-dir' );

// Require all tasks.
requireDir( './gulp/tasks', { recurse: true } );

gulp.task('default', function(  )
{
    runSequence(
        'babel',
        'templates',
        'concat-js',
        'concat-sass',
        'sass',
        'clean'
    );
});
