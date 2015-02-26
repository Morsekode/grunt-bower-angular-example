'use strict';



module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.initConfig({
        // Project settings
        config: {
            // Configurable paths
            app: 'app',
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost'
                }
            },
            dev: {
                options: {
                    base: [
                        '<%= config.app %>'
                    ]
                }
            }
        }

    });
    grunt.registerTask('serve', [
        'connect:dev:keepalive'
    ]);

};