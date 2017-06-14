module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
		  dist: {
		    options: {
		      transform: ['reactify'],
		      outfile: ['idigbio_media_appliance/static/js/client.js']
		    },
		    src: ['client/client.js'],
		    dest: 'idigbio_media_appliance/static/js/client.js',
		  }
		},

		electron: {
			package: {
				options: {
					name: 'iDigBio Media Ingestion Tool',
					dir: '.',
					out: './release-builds',
					version: '1.4.13',
					platform: 'win32',
					arch: 'x64',
					icon: './idigbio_media_appliance/static/img/win.ico'
				}
			}
		}


	});
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-electron');

	grunt.registerTask('default',['browserify','electron']);

};



