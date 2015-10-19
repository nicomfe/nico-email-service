// Generated on 2014-01-06 using generator-angular 0.6.0-rc.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    yeoman: {
      // configurable paths
      //app: require('./bower.json').appPath || 'app',
      app: 'app',
      dist: 'dist'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    compress: {
      dist: {
        options: {
          archive: 'target/register-interest.zip'
        },
        files: [{
          src: ['app/**', 'config/**', 'server.js'],
          dest: '.'
        }, {
          src: Object.keys(require('./package.json').dependencies).map(function(module) {
            return 'node_modules/' + module + '/**';
          }),
          dest: '.'
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'jshint',
    'compress'
  ]);
};