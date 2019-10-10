const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

module.exports = ({mode} = {mode: "production"}) => {
	return {
		mode,
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "main.js"
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			hot: true,
			open: true
		},

		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					}
				},
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
					]
				},
			]
		},
		plugins: [
			htmlPlugin,
			new webpack.HotModuleReplacementPlugin()
		]
	}
};