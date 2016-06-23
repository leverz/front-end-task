/**
 * Created by renren on 16/5/30.
 */
module.exports = function (readFile, targetFile) {
    var fs = require('fs');

    // var readFile = process.argv[2];

    // var targetFile = process.argv[3];

    console.log("正在准备将html文件转换为jsp文件...");
    var _buffer = fs.readFileSync(readFile);



    fs.writeFileSync(targetFile,`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
`, {flag: 'w'});

    fs.writeFileSync(targetFile, _buffer, {flag: 'a'});

    console.log("jsp文件生成成功!");
};
