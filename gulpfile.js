var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    uglify = require('gulp-uglify');

gulp.task('uglify-js', function() {
    return gulp.src([
        'public/bundle.js'
    ])
    //.pipe(concat('public/all.min.js', {newLine: ';'}))
    //.pipe(uglify())
    .pipe(gulp.dest('public/'));
});