'use strict'
//Require all Gulp modules here
//ex: var gulp = require('gulp');
var gulp = require('gulp');
var autoPrefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var jsHint = require('gulp-jshint');
var stylish = require('jshint-stylish');

//*//*//*//*//*//*//*//*//*
// Start Project
//*//*//*//*//*//*//*//*//*
gulp.task('default', function(callback) { //in CLI just type 'gulp' to run this task
  runSequence(['sass', 'browser-sync', 'watch'], callback);
});


//Task for watchers
//*include has many tasks to watch below
gulp.task('watch', ['browser-sync', 'sass'], function(){
  gulp.watch('build/sass/**/*.scss', ['sass']);
  gulp.watch('build/*.html', browserSync.reload);
  gulp.watch('build/js/**/*.js', ['test-js', browserSync.reload]);
});

//js test
gulp.task('test-js', function(){
  return gulp.src(['!build/js/jquery.js', 'build/js/*.js'])
    .pipe(jsHint())
    .pipe(jsHint.reporter(stylish))
});

//sass compiler
gulp.task('sass', function(){
  return gulp.src('build/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//browserSync
gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: 'build'
    },
    browser: 'google chrome',
    notify: false
  });
});

//useref (concatenation of js)
gulp.task('useref', function() {
  return gulp.src('build/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

//compactify images (PNG/JPG/GIF/SVG)
gulp.task('images', function(){
  return gulp.src('build/images/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/images'))
});

//move fonts to dist folder
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

//clean yp dist folder
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//*//*//*//*//*//*//*//*//*
// Package Site for Upload
//*//*//*//*//*//*//*//*//*

gulp.task('package', function(callback) {
  runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'], callback);
});
