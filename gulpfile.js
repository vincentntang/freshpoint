/*
var module = require('module');
gulp.task -define tasks
gulp.src - points to files or folders
gulp.dest - where to place the compiled files
gulp.watch - watch file folders
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

// Sass → Css
gulp.task('sass',function(){
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});
gulp.task('sass:watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
})
gulp.task('default', function(){
  // some code will go here.
});