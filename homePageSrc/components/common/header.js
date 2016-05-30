/**
 * Created by Lever on 16/5/12.
 */
// import React, { Component } from 'react';
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';
import { Link } from 'react-router';

const $ = require("jquery");

const EventUtil = {
    addHandler: function (element, type, handler) {
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent){
            element.attachEvent('on' + type, handler);
        }else{
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.detachEvent){
            element.detachEvent('on' + type, handler);
        }else{
            element['on' + type] = handler;
        }
    }
};
class Banner extends Component{
    isIELt9(){
        var ua = window.navigator.userAgent;
        var ieTest = /MSIE ([^;]+)/;
        if(ieTest.test(ua)){
            return +RegExp["$1"] <= 9;
        }
        return false;
    }
    animation(){
        var that = this;
        $("#bannerImg").animate({width: "110%", height: "110%"},10000,function(){
            $("#bannerImg").animate({width: "100%", height: "100%"}, 10000, that.animation.bind(that));
        });
    }
    backAnimation(){
        if(this.isIELt9()){
            if($("#bannerImg").is(":animated")){
                return;
            }
            this.animation();
        }else {
            return;
        }
    }
    componentDidMount(){
        if(this.props.pathname === 'index'){
            this.backAnimation();
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.pathname === nextProps.pathname){
            return;
        }
        if(nextProps.pathname !== "index"){
            $("#bannerImg").stop().css({width: "100%",height: "100%"});
        }
    }
    renderIndex(){
        if(this.props.pathname === "index"){
            return(
                <div>
                    <div className="banner">
                        <div className="shadow"></div>
                        <div className="banner-img banner-index" id="bannerImg">
                            <div className="content-text" id="contentText">
                                <h1>用科技开启金融服务行业的新时代</h1>
                                <a href="#/applyUse">
                                    <div className="btn-lg" id="tryUse">
                                        <span>立即试用</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="red-ribbon">
                        <img src="http://static.sofund.com/matrix/images/red-ribbon.png" alt="人人金服MATRIX"/>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <div className="banner">
                        <div className="shadow"></div>
                        <div className="banner-img banner-index"></div>
                    </div>
                </div>
            )
        }
    }
    render(){
        return (
            <div className="banner-box">
                {this.renderIndex()}
                {this.props.pathname === "index" && this.backAnimation()}
            </div>
        )
    }
}
export class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isMenuHide: false,
            pathname: props.pathname
        };
    }
    isActive(path){
        return this.props.pathname.indexOf(path) > -1 ? 'active' : '';
    }
    isIndex(){
        return (this.props.pathname === 'index' || this.props.pathname === 'appInfo');
    }
    hideMenu(event){
        event = event || window.event;
        let target = event.target || event.srcElement;
        if(!!event && !!target && (target.id.indexOf('menu') > -1 || target.parentNode.id.indexOf('menu') > -1)){
            this.setState({
                isMenuHide: true
            })
        }
        setTimeout(()=>{this.showMenu()},500);
    }
    showMenu(){
        this.setState({
            isMenuHide: false
        })
    }
    componentDidMount(){
        // document.addEventListener('click',this.hideMenu.bind(this));
        EventUtil.addHandler(document, 'click', this.hideMenu.bind(this));
    }
    componentWillUnmount(){
        // document.removeEventListener('click',this.hideMenu);
        EventUtil.removeHandler(document, 'click', this.hideMenu);
    }
    componentWillReceiveProps(props){
        if(this.props.pathname === props.pathname){
            return;
        }
        this.setState({
            pathname: props.pathname
        });
    }
    render(){
        return (
            <div className={"top-frame " + this.props.pathname}>
                <div className="top-float clearfix">
                    <header className="container">
                        <div className="pull-left logo">
                            <img src={ BASE_STATIC_URL + (this.isIndex() ? "/images/sofund_new_logo.png" : "/images/logo_white.png") } alt="人人金服MATRIX"/>
                        </div>
                        <div className="pull-right">
                            <ul className="nav">
                                <li className={this.isActive('index')}><Link to="/index">首页</Link></li>
                                <li className={this.isActive('appInfo')}><Link to="/appInfo">产品介绍</Link></li>
                                <li className={(this.state.isMenuHide ? 'backHide ' : '') + "dropdown " + (this.isActive('incInfo'))}>
                                    <span className="dropdown-toggle">
                                        <Link to="/incInfo/0">公司介绍</Link>
                                    </span>
                                    <ul className={"dropdown-menu " + (this.state.isMenuHide ? 'menuHide' : '')}>
                                        <li id="menu0"><Link to="/incInfo/0">企业简介</Link></li>
                                        <li id="menu1"><Link to="/incInfo/1">团队介绍</Link></li>
                                        <li id="menu2"><Link to="/incInfo/2">加入我们</Link></li>
                                        <li id="menu3"><Link to="/incInfo/3">联系我们</Link></li>
                                    </ul>
                                </li>
                                <li className={this.isActive('applyUse')}><Link to="/applyUse">申请试用</Link></li>
                            </ul>
                            <a href="http://matrix.sofund.com" target="black" className="btn-lg login-matrix">登录MATRIX</a>
                        </div>
                    </header>
                </div>
                <Banner pathname={this.state.pathname}></Banner>
            </div>
        )
    }
}

// export {Header as default}