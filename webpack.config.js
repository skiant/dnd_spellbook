var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist/',
		filename: 'bundle.js',
	},
	module: {
		preLoaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'},
		],
		loaders: [
			{test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url-loader?limit=16384'},
			{test: /\.html/, loader: 'html'},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
		}),
	],
};
