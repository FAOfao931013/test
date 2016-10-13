const webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var path = require('path');

module.exports = new WebpackConfig.Config().extend('./webpack/config-maker.js').merge({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    // devServer: {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    //     }
    // }
});
