module.exports = function(grunt) {
    "use strict";

    // Load grunt tasks automatically
    require("load-grunt-tasks")(grunt);
    // var path = require("path");

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        watch: {
            configs: {
                files: ["Gruntfile.js", "web/ts/*.ts"],
                tasks: ["typescript"],
                options: {
                    reload: true,
                    spawn: false,
                    debounceDelay: 25
                }
            }
        },

        typescript: {
            base: {
                src: ['web/ts/*.ts'],
                dest: 'web/build/app.js',
                options: {
                    module: 'amd', //or commonjs 
                    target: 'es5', //or es3 
                    basePath: 'web/ts',
                    sourceMap: true,
                    declaration: true
                }
            }
        }


    });

    grunt.registerTask("default", function(target) {
        grunt.task.run(["typescript", "watch"]);
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("typescript", ["typescript"]);
};