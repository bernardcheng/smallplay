import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import buffer from 'vinyl-buffer';
import wrapJS from 'gulp-wrap-js';

const $ = gulpLoadPlugins();
const tsProject = $.typescript.createProject('tsconfig.json');

gulp.task('concat', () => {
  return tsProject.src()
      .pipe(tsProject()).js
      .pipe($.concat('smallplay.js'))
      .pipe(buffer())
      .pipe(gulp.dest('dist'));
});

gulp.task('minify', () => {
  return tsProject.src()
      .pipe(tsProject()).js
      .pipe($.concat('smallplay.min.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe(wrapJS('(function() {%= body %})();'))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest('dist'));
});

gulp.task('default', callback =>
  runSequence(
    'concat',
    'minify',
    callback
  )
);

