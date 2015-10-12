module.exports = function(grunt) {
  grunt.config.merge({    
    copy: {
      all: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.*'],
          dest: 'dist'
        }]
      }
    }
  });
};