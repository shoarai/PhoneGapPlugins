'use strict';

// liveReload�Ŏg���ϐ��Ƃ��������`
var
    LIVE_RELOAD_PORT = 35729,
    lrSnippet = require('connect-livereload')({port: LIVE_RELOAD_PORT}),
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    }

// Grunt�̓��e���`
module.exports = function(grunt) {

    // �K�v�ȃ��W���[���ǂݍ���
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({
        watch: {
            options: {
                // ���̃I�v�V������t���邱�ƂŁAliveReload���o���܂�
                livereload: LIVE_RELOAD_PORT
            },
            html: {
                files: ['./**/*.html'],
                tasks: ['']
            },
            css: {
                files: ['./**/*.css'],
                tasks: [''] // ����Compass�Ȃǂ̃^�X�N������΂����ɒǉ�����B
            },
	            js: {
                files: ['./**/*.js'],
                tasks: ['']
            },
        },
        connect: {
            options: {
                port: 8000,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, './')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%=connect.options.port%>'
            }
        }
    });
    grunt.registerTask('default', ['connect:livereload', 'open', 'watch']);
};