const path = require('path');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './demos/src/index.js',
	output: {
		path: path.join(__dirname, '.tmp/scripts'),
		filename: 'index.js',
		sourceMapFilename: '[file].map'
	},
	watch: true,
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src/js'),
					path.resolve(__dirname, 'bower_components')
				],
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new BowerWebpackPlugin({
			includes: /\.js$/
		})
	]
};