// Main Dependancies
let gulp = require('gulp');
// Dependancies - Concat
let concat = require('gulp-concat');
// Dependancies - SASS
let sass = require('gulp-sass');
// Dependancies - Livereload
let connect = require('gulp-connect');

/**
 * Task to host project on localhost:8080 with livereload.
 * Target repository : './src'
 */
gulp.task('connect', function() {
    connect.server({
        port: 8888,
        root: 'src',
        livereload: true
    });
});

/**
 * Watch html file in two sources.
 */
gulp.task('html', function () {
    gulp.src('./src/index.html')
        .pipe(connect.reload());
    gulp.src('./src/app/**/*.html')
        .pipe(connect.reload());
});

/**
 * Watch scss file in one source.
 * Log error when it appeared.
 * ?
 */
gulp.task('sass', function () {
    return gulp.src('./src/app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./src/'))
        .pipe(connect.reload());
});

/**
 * Watch and ?
 */
gulp.task('watch', function () {
    gulp.watch(['./src/index.html','./src/app/**/*.html'], ['html']);
    gulp.watch(['./src/app/**/*.scss'], ['sass']);
});

gulp.task('serve', ['connect', 'watch', 'sass']);