/**
 * Created by Lever on 16/5/12.
 */

var $ = require('jquery');
require('./common/common.scss');

// import React from 'react';
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'; //弃用browserHistory,IE8不支持,改用hashHistory

import { Header } from './common/header';
import { Footer } from './common/footer';
import { Index } from './app-child/index';
import { AppInfo } from './app-child/appInfo';
import { IncInfo, IncChild } from './app-child/incInfo';
import { ApplyUse } from './app-child/applyUse';

window.BASE_STATIC_URL = "http://static.sofund.com/matrix";

class App extends Component{
    getPathName(){
        var pathName = this.props.location.pathname;
        pathName = pathName.replace('/','');
        if(pathName === ''){
            pathName = "index";
        }
        return pathName;
    }
    render(){
        return (
            <div>
                <Header pathname={this.getPathName()}></Header>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
}
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="index" component={Index} />
            <Route path="appInfo" component={AppInfo} />
            <Route path="incInfo" component={IncInfo}>
                <Route path=":key" component={IncChild}/>
            </Route>
            <Route path="applyUse" component={ApplyUse} />
            <Route path="*" component={Index}/>
        </Route>
    </Router>
), document.getElementById('content'));
