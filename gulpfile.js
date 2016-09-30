/**
 * npm install -g gulp
 * npm install -g browser-sync
 */

var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
	less = require('gulp-less');

var app = gulp.env.app;

gulp.task('serve', ['less'], function(){
	browserSync.init({
		notify: false,
		port: 9002,
		server: {
			baseDir: './' + app + '/',
		}
	});

	gulp.watch('./' + app + '/css/*.less',
	 ['less']);

	gulp.watch([
    	'./' + app + '/html/*.html',
    	'./' + app + '/css/*.css'
  	]).on('change', reload);
});


gulp.task('less', function(){	
	gulp.src('./' + app + '/css/*.less')
	.pipe(less())
	.pipe(gulp.dest('./' + app + '/css/'))
	.pipe(reload({stream: true}));	
});	
