'use strict';

//enable modrewite (httaccess like) and mount the app directory
var modRewrite = require('connect-modrewrite');
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        // Project settings
        config: {
            // Configurable paths
            app: 'app',
        },
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '<%= config.app %>/images/{,*/}*',
                    '<%= config.app %>/scripts/*.js'
                ]
            }
        },
        connect: {
            options: {
                port: 8000,
                livereload: 35729,
                hostname: 'localhost'
            },
            dev: {
                options: {
                    base: [
                        '<%= config.app %>'
                    ]
                }
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= config.app %>'
                    ],
                    //htaccess like middleware
                    //currently set to route all traffic through index.html
                    middleware: function (connect) {
                        return [
                            modRewrite (['!\\.html|\\.scss|\\.js|\\.svg|\\.css|\\.png|\\.jpg$ /index.html']),
                            mountFolder(connect, 'app'),
                        ];
                    }
                }
            },
        }

    });
    grunt.registerTask('serve', [
        'connect:livereload',
        'watch'
    ]);

};