/**
 * Created by renren on 16/5/30.
 */

var webpack = require("webpack");
var cheerio = require("cheerio");
var path = require("path");
var fs = require("fs");
var clean = require("./clean.js");

clean("./dist");
clean("./jsp");

const jsList = {
    person: "./src/person/app.js",
    fundPrice: "./src/fund-price/app.js",
    fundHold: "./src/fund-hold/app.js",
    fundRecord: './src/fund-record/app.js',
    fundDetail: './src/fund-detail/app.js',
    fundManager: './src/fund-manager/app.js',
    fundSelf: './src/fund-self/app.js'
};

const htmlList = {
    person: "./src/person/index.html",
    fundPrice: "./src/fund-price/index.html",
    fundHold: "./src/fund-hold/index.html",
    fundRecord: './src/fund-record/index.html',
    fundDetail: './src/fund-detail/index.html',
    fundManager: './src/fund-manager/index.html',
    fundSelf: './src/fund-self/index.html'
};
/**
 * 判断当前是否为生产环境
 * @returns {boolean}
 */
var isPro = function () {
    return process.env.NODE_ENV === "pro";
};


var html2Jsp = function (key, fileName) {
    fs.readFile(htmlList[key], (error, data) => {
        const $ = cheerio.load(data.toString());
        $('script[src*=dist]').attr('src', './dist/' + fileName);

        fs.writeFileSync('./jsp/' + key + '.jsp',`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
`, {flag: 'w'});

        fs.writeFileSync('./jsp/' + key + '.jsp', $.html(), {flag: 'a'});

        console.log(key + '.jsp生成成功:' + fileName);
    })
};

console.log(__dirname);
module.exports = {
    entry: jsList,
    output: {
        path: __dirname + '/dist',
        filename: isPro() ? "[name].[chunkhash].js" : "./dist/[name].js"
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'es3ify!babel-loader?presets[]=es2015&presets[]=react'}
        ]
    },
    devtool: isPro() ? null : "source-map",

    plugins: [
        function () {
            this.plugin('done', stats => {
                let assetsByChunkName = stats.toJson().assetsByChunkName;
                if(!isPro()){
                    for(let key in htmlList){
                        html2Jsp(key, assetsByChunkName[key][0]);
                    }
                    return;
                }
                for(let key in htmlList){
                    html2Jsp(key, assetsByChunkName[key]);
                }
            })
        }
    ]
};
