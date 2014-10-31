module.exports = function(grunt) {
  var srcFiles = [
    '*.js',
    'public/*.js'
  ];

  grunt.initConfig({
    jshint: {
      files: srcFiles
    },

    jscs: {
      src: srcFiles,
      options: {
        preset: 'google'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('default', [
    'jshint',
    'jscs'
  ]);
};
