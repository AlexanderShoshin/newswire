module.exports = function(grunt) {
  grunt.config.merge({
    clean: {
      all: {
        src: ['dist']
      }
    }
  });
};