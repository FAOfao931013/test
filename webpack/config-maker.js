var styleLintPlugin = require('stylelint-webpack-plugin');
var WebpackConfig = require('webpack-config');
var path = require('path');
// var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
// var hotMiddlewareScript = 'webpack-hot-middleware/client?http://localhost:8010';

var paths = {
    components: path.join(__dirname, '../src/components'),
    store: path.join(__dirname, '../src/store'),
    reducers: path.join(__dirname, '../src/reducers'),
    actions: path.join(__dirname, '../src/actions'),
    routes: path.join(__dirname, '../src/routes'),
    containers: path.join(__dirname, '../src/containers'),
    selectors: path.join(__dirname, '../src/selectors'),
    actionTypes: path.join(__dirname, '../src/actionTypes'),
    constants: path.join(__dirname, '../src/constants')
};

var config = {
    // entry: {
    //     entry: [
    //         hotMiddlewareScript,
    //         // 'webpack/hot/only-dev-server',
    //         path.join(__dirname, '../src/entry.js')
    //     ]
    // },

    devtool: '#source-map',

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        clearBeforeBuild: true,
        publicPath: '/static/'
    },

    module: {
        loaders: [
            // jsx
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            //js
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            // less
            {
                test: /\.less$/,
                loader: "style!css!less"
            }

        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'components': paths.components,
            'store': paths.store,
            'actions': paths.actions,
            'reducers': paths.reducers,
            'routes': paths.routes,
            'containers': paths.containers,
            'selectors': paths.selectors,
            'actionTypes': paths.actionTypes,
            'constants': paths.constants
        }
    },
    plugins: [
        //new styleLintPlugin({
        //    configFile: '.stylelintrc',
        //    syntax: 'less',
        //    files: '../src/components/**/*.less'
        //})
    ]
};

module.exports = new WebpackConfig.Config().merge(config);
