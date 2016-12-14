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
        watch: {
            configs: {
                files: ["web/ts/*.ts"],
                tasks: ["default"],
                options: {
                    reload: true,
                    spawn: false,
                    debounceDelay: 25
                }
            }
        },

        ts: {
            default: {
                tsconfig: true
            }
        }



    });


    grunt.registerTask('default', ['concat', 'uglify', 'watch', 'ts']);

};