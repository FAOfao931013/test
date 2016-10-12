var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var redis = require('redis');
var apiProxy = require('express-api-proxy');

require('redis-streams')(redis);

var config = require('./webpack/dev.js');

var app = express();
var compiler = webpack(config);

app.use(express.static(path.join(__dirname, '/')));

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.all('/proxy', apiProxy({
    ensureAuthenticated: false
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8010, 'localhost', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening at http://localhost:8010');
    }
});

