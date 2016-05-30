/**
 * Created by Lever on 16/5/12.
 */
// import React, { Component } from 'react';
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';
import { Link } from 'react-router';


export class Footer extends Component{
    isFireFox(){
        var rFirefox = /.*(firefox)\/([\w.]+).*/;
        var ua = navigator.userAgent.toLowerCase();
        return rFirefox.test(ua);
    }
    isIE(){
        var ua = navigator.userAgent;
        return ua.indexOf("MSIE") >= 0 || (/Trident\/7\./).test(ua);
    }
    render(){
        return (
            <div className="bottom-frame">
                <footer className="container">
                    <div className="pull-left contact-info">
                        <p>客服热线 ( 10:00-19:00 )</p>
                        <p className="big-title">400-818-1788</p>
                        <p className={this.isIE() ? "mb15" : "mb30"}>sofund@renren-inc.com</p>
                        <ul>
                            <li>
                                <Link to="/incInfo/3">联系我们</Link>
                            </li>
                            <li>
                                <a href="http://www.renren-inc.com/zh/" target="black">人人公司</a>
                            </li>
                            <li>
                                <a href="http://matrix.sofund.com" target="black" style={{lineHeight: this.isFireFox() ? "1.5em" : "1em"}}>MATRIX</a>
                            </li>
                            <li>
                                <a href="http://private.sofund.com" target="black">人人私募</a>
                            </li>
                        </ul>
                        <span>人人金服版权所有  京ICP备15040616</span>
                    </div>
                    <div className="pull-right">
                        <div className="wechat-code">
                            <img src="http://static.sofund.com/matrix/images/sofund_wechat_code.png" alt="人人金服MATRIX" className="wechat"/>
                            <p>人人金服官方公众号</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}