var gulp = require('gulp'),
		uglify = require('gulp-uglify');

gulp.task('build:js', function() {
	gulp.src('scripts/*.js')
		.pipe(uglify('app.min.js'))
		.pipe(gulp.dest('dist'))
});