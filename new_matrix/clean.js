/**
 * Created by renren on 16/5/30.
 */
var fs = require('fs');

var clean = function (path) {
    var files = [];
    if(fs.existsSync(path)){
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" +file;
            if(fs.statSync(curPath).isDirectory()){
                clean(curPath);
            }else{
                fs.unlinkSync(curPath);
            }
        })
    }
};

// clean(process.argv[2]);

module.exports = clean;