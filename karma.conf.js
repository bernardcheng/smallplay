// Karma configuration
// Generated on Thu Jun 08 2017 14:37:13 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'test/browser/**/*.html',
      'test/**/*_test.ts',
      {
        pattern: 'src/**/*.ts', included: false, served: false
      },
      {
        pattern: 'test/browser/stylesheets/common.css', included: false
      }
    ],


    client: {
      mocha: {
        opts: 'test/mocha.opts' // You can set opts to equal true then plugin will load opts from default location 'test/mocha.opts'
        // delay: true
      }
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.ts': ['browserify'],
      'test/**/*_test.ts': ['browserify'],
      'test/browser/**/*.html': ['html2js'],
      'test/browser/**/*.json': ['json_fixtures']
    },


    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },


    mime: {
      'text/x-typescript': ['ts','tsx']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    browserify: {
      plugin: [
        [
          'tsify',
          {
            target: 'es6'
          }
        ]
      ],
      extensions: ['.ts'],
      transform: [
        [
          'babelify',
          {
            presets: ['es2015'],
            extensions: ['.tsx', '.ts']
          }
        ]
      ]
    }
  })
}
