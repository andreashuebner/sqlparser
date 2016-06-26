var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');
 
gulp.task('default', function() {
  return gulp.src('src/*.js','node-modules/google-closure-library/closure/goog/**/*.js')
    .pipe(closureCompiler({
      compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
      fileName: 'sqlparser.js',
    compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        warning_level: 'DEFAULT'
      }
    }))
    .pipe(gulp.dest('bin'));
});