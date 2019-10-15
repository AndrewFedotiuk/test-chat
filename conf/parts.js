const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const htmlPlugin =
	new HtmlWebPackPlugin({
		template: "./src/index.html",
	});

exports.entry = () => ({
	entry: "./src/index.js",
});

exports.output = () => ({
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].[hash:8].build.js"
	},
});

exports.devServer = (buildPath = 'dist') => ({
	devServer: {
		contentBase: path.join(__dirname, buildPath),
		hot: true,
		open: true
	}
});

exports.loadJs = () => ({
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
		]
	},

	plugins: [
		htmlPlugin,
	]
});

exports.loadCss = () => ({
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						}
					},
					{
						loader: "sass-loader"
					}
				],
			}
		]
	},
	plugins: []
});

exports.clean = (pathx = 'dist') => ({
	plugins: [
		new CleanWebpackPlugin(
			{
				root: path.resolve(__dirname, pathx),
				verbose: false,
				dry: false,
				watch: false
			}
		)
	]
});

exports.extractCss = () => ({
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
							hmr: process.env.NODE_ENV === 'development',
						}
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash:8].build.css',
			chunkFilename: '[id].css',
			ignoreOrder: false,
		})
	]
});

