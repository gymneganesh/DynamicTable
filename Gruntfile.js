module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './',
                    hostname: '*',
                    keepalive: true

                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8000/index.html'
            }
        },
        ts: {
            dev: {
                src: ['app/**/*.ts'],
                reference: './app/reference.ts',
                out: './app/out.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-ts');



    grunt.registerTask('build', ['ts', 'open', 'connect']);
    grunt.registerTask('default', ['build'])

}