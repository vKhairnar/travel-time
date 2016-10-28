/* global process:true */

var angularity = require('webpack-angularity-solution');

const PORT    = 1000,
    GLOBALS = {
        $              : 'jquery',
        jQuery         : 'jquery',
        'window.jQuery': 'jquery'
    };

module.exports = angularity({globals: GLOBALS, port: PORT}, process.env)
    .define('common')
    .append(amendJsonLoader)
    .include(process.env.MODE) // app|test|release
    .otherwise('app,test')     // run app+test if MODE is unspecified
    .resolve();

function amendJsonLoader(configurator, options) {
    return configurator
        .loader('json', {
            test  : /\.json$/,
            loader: "url?name=assets/[name]-[hash].[ext]&mimetype=application/json"
        });
}