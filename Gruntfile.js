'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'closure-compiler': {
      'all': {
        'js': ['src/*.js'],
        'jsOutputFile': 'build/build.min.js',
        'maxBuffer': 500,
        'options': {
          'compilation_level': 'ADVANCED_OPTIMIZATIONS'
        , 'language_in': 'ECMASCRIPT5_STRICT'
        , 'process_common_js_modules': null
        , 'common_js_entry_module': '???'
        }
      }
    },
    'nodeunit': {
      files: ['test/**/*_test.js'],
    },
    'jshint': {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    },
  });

  // These plugins provide necessary tasks.
//  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-closure-compiler');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
