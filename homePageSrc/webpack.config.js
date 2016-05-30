/**
 * Created by Lever on 16/5/12.
 */

var webpack = require("webpack");
var path = require("path");
var fs = require("fs");
/**
 * 判断当前是否为生产环境
 * @returns {boolean}
 */
var isPro = function () {
    return process.env.NODE_ENV === "pro";
};


module.exports = {
    // entry: ['./components/header.js','./components/footer.js','./components/appInfo.js','./components/incInfo.js','./components/applyUse.js','./components/index.js','./components/app.js'],
    entry: './components/app.js',
    output: {
        filename: isPro() ? './dist/bundle.[hash].js' : "./dist/bundle.js"
        // filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'es3ify!babel-loader?presets[]=es2015&presets[]=react'}
        ]
    },
    devtool: isPro() ? null : "source-map",

};
