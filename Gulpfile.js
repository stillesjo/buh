'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');

var ignoredFiles = ['!Gulpfile.js','!node_modules/**/*.js', '!debug/*'];
var jsfiles = ['**/*.js'].concat(ignoredFiles);
var testfiles = ['test/**/*.js'].concat(ignoredFiles);
var sourceFiles = jsfiles.concat(['!test/**/*.js']);

function ErrorHandler(err) {
  console.log(err);
  this.end(); 
}

gulp.task('lint', function() {
  gulp.src(jsfiles)
  .pipe(jshint())
  .on('error', ErrorHandler)
  .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function() {
  return gulp.src(jsfiles)
  .pipe(jscs().on('error', function(){
    console.log('Errors..');
    this.end();
  }))
  .on('error', ErrorHandler);
});

gulp.task('exec-test', function() {
  gulp.src(testfiles)
  .pipe(cover.instrument({
    pattern: sourceFiles,
  }))
  .pipe(mocha())
  .on('error', ErrorHandler)
  .pipe(cover.gather())
  .pipe(cover.format())
  .pipe(gulp.dest('reports'));
});


gulp.task('test', ['exec-test', 'lint', 'jscs']);
gulp.task('watch', ['test'], function() {
  watch('**/*.js', batch(function(events, done) {
    gulp.start('test', done)
    .on('error', ErrorHandler);
  }));
});
gulp.task('watch-no-lints', ['exec-test'], function() {
  watch(jsfiles, batch(function(events, done) {
    gulp.start('exec-test', done)
    .on('error', ErrorHandler);
  }));
});

gulp.task('default', ['watch']);

gulp.task('testing', ['jscs'],function() {
  watch(jsfiles, batch(function(events, done) {
    gulp.start('jscs', done)
    .on('error', ErrorHandler);
  }));
});
