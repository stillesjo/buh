'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var jshint = require('gulp-jshint');
var lab = require('gulp-lab');
var jscs = require('gulp-jscs');

var jsfiles = ['**/*.js', '!node_modules/**/*.js'];
var testfiles = ['test/**/*.js'];

gulp.task('lint', function() {
  gulp.src(jsfiles)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function() {
  return gulp.src(jsfiles)
  .pipe(jscs());
});

gulp.task('test', ['lint', 'jscs'], function() {
  gulp.src(testfiles)
  .pipe(lab());
});

gulp.task('watch', ['test'], function() {
  watch('**/*.js', batch(function(events, done) {
    gulp.start('test', done);
  }));
});

gulp.task('default', ['watch']);
