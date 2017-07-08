var gulp 		= require('gulp');
var $			= require('gulp-load-plugins')();
var util 		= require('gulp-util');
var sourcemaps  = require('gulp-sourcemaps');

// standard task of compiling SCSS
gulp.task('style', function() {
	return gulp.src('assets/scss/style.scss')
			.pipe(sourcemaps.init())
			.pipe($.sass({
				includePaths: 'assets/scss'
			})
			.on('error', $.sass.logError))
			.pipe($.autoprefixer({
				browsers: ['last 2 version']
			}))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('assets/css'))
});

// compress them files
gulp.task('mini', function() {

});

// automate!
gulp.task('default', ['style'], function() {
	util.log('Watching for changes.')
	gulp.watch(['assets/scss/*.scss'], ['style']);
});