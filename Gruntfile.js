module.exports = function(grunt) {
  var path = require('path');
  
  // Load nodejs modules related to grunt
  require('load-grunt-tasks')(grunt);

  // Base configuration.
  grunt.initConfig({});

  // Load common configuration parts
  grunt.file.expand('grunt-config/*.js').forEach(loadGruntConfigPart);
  
  // Default task
  grunt.registerTask('default', ['clean', 'copy']);

  function loadGruntConfigPart(gruntConfigPath) {
    var absolutePath = path.resolve(gruntConfigPath);
    require(absolutePath)(grunt);
  }
};