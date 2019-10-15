const path = require('path');
const merge = require('webpack-merge');
const parts = require('./conf/parts');

const commonConfig = merge([
	parts.entry(),
	parts.loadJs(),
]);

const developmentConfig = merge([
	parts.devServer(),
	parts.loadCss()
]);

const productionConfig = merge([
	parts.clean('dist'),
	parts.output(),
	parts.extractCss()
]);

module.exports = (undefined, {mode}) => {
	const config = mode === 'production' ? productionConfig : developmentConfig;
	return merge([commonConfig, config, {mode: mode}]);
};