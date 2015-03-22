module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: ['bower_components/modernizr/modernizr.js', 'bower_components/jquery/dist/jquery.min.js', 'bower_components/foundation/js/foundation.min.js', 'owl-carousel/owl.carousel.js', 'js/lib/*.js', 'js/app.js'],
				dest: '<%= pkg.name %>.js',
			}
		},
		uglify: {
			options: {
		      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		        '<%= grunt.template.today("yyyy-mm-dd") %> */'
		    },
			my_target: {
				files: {
					'<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
				}
			},
		},
		watch: {
			scripts: {
				files: ['bower_components/modernizr/modernizr.js', 'bower_components/jquery/dist/jquery.min.js', 'bower_components/foundation/js/foundation.min.js', 'owl-carousel/owl.carousel.js', 'js/lib/*.js', 'js/app.js'],
				tasks: ['default-process'],				
			},
		},
		imagemin: {
		    png: {
		      options: {
		        optimizationLevel: 7,
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'img/original/',
		          src: ['**/*.png'],
		          // Could also match cwd line above. i.e. project-directory/img/
		          dest: 'img/'
		        }
		      ]
		    },
		    jpg: {
		      options: {
		        progressive: true
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'img/original/',
		          src: ['**/*.jpg'],
		          // Could also match cwd. i.e. project-directory/img/
		          dest: 'img/'
		        }
		      ]
		    }
	 	}
	});

	//load needed plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	//set default task, to run typing "grunt" in command line
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('default-process', ['concat', 'uglify:my_target']); 
};