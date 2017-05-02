var webpack = require('webpack');

var webpackConfig = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css?$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/
			}
		]
	}
}

module.exports = webpackConfig;