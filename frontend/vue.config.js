const path = require('path')

module.exports = {
	devServer: {
	proxy: 'http://moxrs.loc'
	},
	outputDir: '../public',
	indexPath: process.env.NODE_ENV === 'production' ? '../resources/views/index.blade.php' : 'index.html',
	configureWebpack: {
		resolve: {
			alias: {
				'@views': path.resolve(__dirname, 'src/@views')
			}
		}
	}
};