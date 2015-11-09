var gulp = require('gulp');
var stripJsonComments = require('gulp-strip-json-comments');
var rename = require("gulp-rename");

gulp.task('default', function () {
    return gulp.src('eslint-comments.json')
        .pipe(stripJsonComments())
        .pipe(rename('./eslint.json'))
        .pipe(gulp.dest('./'));
});