
var gulp  = require('gulp');

var inject = require('gulp-inject');
var webserver = require('gulp-webserver');

var paths = {
  src: 'app/**/*',
  srcHTML: 'app/**/*.html',
  srcCSS: 'app/**/*.css',
  srcJS: 'app/**/*.js',
  tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpJS: 'tmp/**/*.js',
  dist: 'dist',
  distIndex: 'dist/index.html',
  distCSS: 'dist/**/*.css',
  distJS: 'dist/**/*.js'
};

// // create a default task and just log a message
// gulp.task('default', function() {
//   return gutil.log('Gulp is running!')
// });

// gulp.task('copyHtml', function() {
//   // copy any html files in source/ to public/
//   gulp.src('app/view/*.html')
//   .pipe(gulp.dest('public'));
// });

// gulp.task('build-js', function() {
//   return gulp.src('app/script/**/*.js')
//     .pipe(sourcemaps.init())
//       .pipe(concat('bundle.js'))
//       //only uglify if gulp is ran with '--type production'
//       .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('public/assets/javascript'));
// });


gulp.task('html', function () {
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('css', function () {
  return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
});
gulp.task('js', function () {
  return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});

gulp.task('copy', ['html', 'css', 'js']);

gulp.task('inject', ['copy'], function () {
  var css = gulp.src(paths.tmpCSS);
  var js = gulp.src(paths.tmpJS);
  return gulp.src(paths.tmpIndex)
    .pipe(inject( css, { relative:true } ))
    .pipe(inject( js, { relative:true } ))
    .pipe(gulp.dest(paths.tmp));
});


gulp.task('serve', ['inject'], function () {
  return gulp.src(paths.tmp)
    .pipe(webserver({
      port: 3000,
      livereload: true
    }));
});