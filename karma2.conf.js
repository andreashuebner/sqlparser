// Karma configuration
// Generated on Sun Sep 27 2015 16:34:08 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
     // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    plugins : [
        'karma-jasmine',
        'karma-phantomjs-launcher',
    ],
   /*
   'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-mocks.js',
      'js/jsfiles/*.js',
      'js/tests/*.js'
   */
    // list of files / patterns to load in the browser
    files: [
     'bin/sqlparser.js',
     'tests/test.js'
     
     
     
      
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 8000,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


   


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
