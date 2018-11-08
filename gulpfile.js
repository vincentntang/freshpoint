/*
var module = require('module');
gulp.task -define tasks
gulp.src - points to files or folders
gulp.dest - where to place the compiled files
gulp.watch - watch file folders
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync', function(){
  browserSync.init({
    server:{
      baseDir: "./dist"
    },
    // proxy:'http://localhost/devwp'
  })
})

// Sass → Css
gulp.task('sass',function(){
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});
// Watch changes
gulp.task('watch', ['browser-sync', 'sass'], function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
})
gulp.task('default', ['browser-sync', 'sass','watch']);