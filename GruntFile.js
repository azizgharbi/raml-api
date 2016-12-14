
module.exports = function(grunt) {

grunt.initConfig({
  
 /*jshint: {
    all: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'web/bower_components/angular/angular.js','web/build/app.js']
  }, */


  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js','web/bower_components/angular/angular.js'],
      dest: 'web/build/all.js',
    },
  },

   uglify: {
    dist: {
      files: {
        'web/build/all.min.js': ['web/build/all.js']
      }
    }
  }
  
  

});


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default',['concat','uglify']);


};