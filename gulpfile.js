var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );


gulp.task( 'clean', function() {
	return vui.clean( [ 'dist/**/*', 'lib' ] );
} );

gulp.task( 'css', function () {
	return vui.makeCss( 
		'src/**/*.style',
		'dist/', 
		{ 
		  'lintOpts' : '.csslintrc'
		}
	);
} );

gulp.task( 'less', function () {
	return vui.makeLess( 'src/**/*.less', 'dist/' );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css', 'less' );
} );