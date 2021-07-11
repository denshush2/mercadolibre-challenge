const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
	alias({
		'@assets': 'src/assets',
		'@components': 'src/components',
		'@config': 'src/config',
		'@containers': 'src/containers',
		'@interfaces': 'src/interfaces',
		'@layouts': 'src/layouts',
		'@pages': 'src/pages',
		'@providers': 'src/providers',
		'@routes': 'src/routes',
		'@services': 'src/services',
		'@styles': 'src/styles',
		'@utils': 'src/utils',
	})(config)

	return config
}
