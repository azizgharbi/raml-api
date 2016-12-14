module.exports = function(grunt) {
    // charger les plugins 
    require('load-grunt-tasks')(grunt);


    grunt.initConfig({

        /*jshint: {
           all: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'web/bower_components/angular/angular.js','web/build/app.js']
         }, */


        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'web/bower_components/angular/angular.js'],
                dest: 'web/build/all.js',
            },
        },

        uglify: {
            options: {
                mangle: false // non change name
            },
            dist: {
                files: {
                    'web/build/all.min.js': ['web/build/all.js'],
                    'web/build/app.min.js': ['web/build/app.js'],

                }
            }
        },

        typescript: {
            base: {
                src: ["web/ts/*.ts"],
                dest: 'web/build/app.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        },

        watch: {
            configs: {
                files: ["web/ts/*.ts"],
                tasks: ["typescript"],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },




    });


    grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};