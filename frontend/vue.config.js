module.exports = {
	devServer: {
	proxy: 'http://moxrs.loc'
	},
	outputDir: '../public',
	indexPath: process.env.NODE_ENV === 'production' ? '../resources/views/index.blade.php' : 'index.html'
};