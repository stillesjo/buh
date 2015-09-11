'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
//var mocha = require('gulp-mocha');

var ignoredFiles = ['!Gulpfile.js','!node_modules/**/*.js'];
var jsfiles = ['**/*.js'].concat(ignoredFiles);
var testfiles = ['test/**/*.js'].concat(ignoredFiles);

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
  //gulp.src(testfiles)
  //.pipe(mocha());
});

gulp.task('watch', ['test'], function() {
  watch('**/*.js', batch(function(events, done) {
    gulp.start('test', done);
  }));
});

gulp.task('default', ['watch']);
