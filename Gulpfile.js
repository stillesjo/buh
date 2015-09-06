'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var jshint = require('gulp-jshint');
var lab = require('gulp-lab');

var jsfiles = ['**/*.js', '!node_modules/**/*.js'];
var testfiles = ['test/**/*.js'];

gulp.task('lint', function() {
  gulp.src(jsfiles)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('test', ['lint'], function() {
  gulp.src(testfiles)
  .pipe(lab());
});

gulp.task('watch', ['test'], function() {
  watch('**/*.js', batch(function(events, done) {
    gulp.start('test', done);
  }));
});

