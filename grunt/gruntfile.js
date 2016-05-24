/**
 * Created by Home on 23.05.2016.
 */

module.exports = function(grunt) {


    grunt.initConfig({
        concat: {
            dist: {
                src: ['styles/variables.scss','styles/reset.scss','styles/style.scss'],
                dest: 'styles/main.scss'
            }
        },
        uglify: {
            dist: {
                src: ['js/dist/script.min.js'],
                dest: 'js/dist/script.min.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['main.scss'],
                    dest: 'styles',
                    ext: '.css'
                }]
            }
        },
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['styles/*.sass'],
                tasks: ['concat','sass']
            }
        }

    });



    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');



    grunt.registerTask('default', ['concat','uglify','sass']);

};