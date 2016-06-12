module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            copyOp: {
                cwd: 'src',
                src: ['**'],
                dest: 'build',
                expand: true
            },
        },
        clean: {
            cleanOp: {
                src: ['build']
            }
        },
        uglify: {
            build: {
                options: {
                    mangle: false
                },
                files: {
                    'build/application.js': ['build/**/*.js']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base:'.',
                    hostname: '*',
                    open:true,
                    keepalive:true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('build', ['clean', 'copy']);
    grunt.registerTask('default', ['build', 'connect'])

}