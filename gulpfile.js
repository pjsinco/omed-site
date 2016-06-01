'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var child = require('child_process');

var styleFiles = 'styles/**/*.scss';
var scriptFiles = 'scripts/**/*.js';
var siteRoot = '_site';

function onError(error) {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('jekyll', function() {

  var jekyll = child.spawn('jekyll', ['build', 
    '--watch',
    '--incremental',
    '--drafts',
  ]);

  var jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(msg) {
        gutil.log('Jekyll: ' + msg);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  
});

gulp.task('compileSass', function() {

    gulp.src([styleFiles])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('styles'))
        .pipe(notify({ message: 'Sassed!' }))
        .pipe(browserSync.stream());
    
});

gulp.task('scripts', function() {

    var b = browserify({
        entries: 'scripts/main.js',
        debug: true,
    });

    b.bundle()
        .on('error', notify.onError(function(error) {
            return error.message;
        }))
        .pipe(source('main.js'))
        .pipe(rename('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('assets'))
        .pipe(notify({ message: 'Browserified!' }))
        .pipe(browserSync.stream());
        
});

gulp.task('serve', function() {

  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(styleFiles, ['compileSass']);
  gulp.watch(scriptFiles, ['scripts']);
  
});

gulp.task('default', ['compileSass', 'scripts', 'jekyll', 'serve']);
