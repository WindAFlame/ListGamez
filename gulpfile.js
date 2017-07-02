// Main Dependancies
var gulp = require('gulp');
// Dependancies - Livereload
var browserSync = require('browser-sync');

/**
 * Task to test if gulp works
 */
gulp.task('hello',function(){
    console.log('Hello World !');
});

/**
 * Task to deploy webseite for dev
 */
gulp.task('serve', function(){
    browserSync({
        server: {
            baseDir: ".",
            index: "index.cdn.html"
        }
    })
})