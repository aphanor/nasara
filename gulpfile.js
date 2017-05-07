var gulp = require('gulp'),
    webserver = require('gulp-webserver');
    
gulp.task('server', function() {
    gulp.src('src/')
    .pipe(webserver({
    	livereload: true,
    	open: true
    }));
});

gulp.task('default', ['server']);