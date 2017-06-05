import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import tsify from 'tsify';
import buffer from 'vinyl-buffer';
import wrapJS from 'gulp-wrap-js';
import gulpUtil from 'gulp-util';
import watchify from 'watchify';

const $ = gulpLoadPlugins();
const tsProject = $.typescript.createProject('tsconfig.json');

gulp.task('concat', () => {
  return browserify({
          basedir: '.',
          debug: true,
          entries: ['src/main.ts'],
          cache: {},
          packageCache: {}
      })
      .plugin(tsify)
      .bundle()
      .pipe(source('smallplay.js'))
      .pipe(buffer())
      .pipe(gulp.dest('dist'));
});

gulp.task('minify', () => {
  return browserify({
          basedir: '.',
          debug: true,
          entries: ['src/main.ts'],
          cache: {},
          packageCache: {}
      })
      .plugin(tsify)
      .transform('babelify', {
          presets: ['es2015'],
          extensions: ['.ts']
      })
      .bundle()
      .pipe(source('smallplay.min.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe(wrapJS('(function() {%= body %})();'))
      .pipe($.uglify().on('error', gulpUtil.log))
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest('dist'));
});

function watchFiles(watchType) {
  gulp.watch([
    'src/**/*.ts'
  ], ['concat']);
}

gulp.task('watch', watchFiles);
gulp.task('default', callback =>
  runSequence(
    'concat',
    'minify',
    callback
  )
);
