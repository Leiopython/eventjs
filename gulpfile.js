
var gulp = require('gulp'),
	gUglify = require('gulp-uglify'),
	gConcat = require('gulp-concat'),
	gSourcemaps = require('gulp-sourcemaps');


var DEST = 'dist';

var del = require('del');

gulp.task('build:js', function() {
	gulp.src('scripts/*.js')
		.pipe(gSourcemaps.init())
		.pipe(gConcat('eventjs.min.js'))
		.pipe(gUglify())
		.pipe(gSourcemaps.write('.'))
		.pipe(gulp.dest(DEST))
});

gulp.task('clean', function() {
	return del(DEST);
});

gulp.task('build',['build:js']);