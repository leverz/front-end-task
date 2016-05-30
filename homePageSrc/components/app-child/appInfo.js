/**
 * Created by Lever on 16/5/12.
 */

// import React, { Component } from 'react';
const React = require('react');
const Component = React.Component;

import { render } from 'react-dom';

let appInfo = [{
    text: "MATRIX可实时记录并测算所投资的基金产品份额及收益，依据我们每个用户的不同需求，提供精细化和专业化的深度定制解决方案。",
    image: "http://static.sofund.com/matrix/images/app_info_1.png"
},{
    text: "MATRIX提供专业的基金、债券等实时行情数据和资讯，并结合机器学习等高新技术制定筛选策略，辅助用户筛选优质投资标的。",
    image: "http://static.sofund.com/matrix/images/app_info_2.png"
},{
    text: "MATRIX搭建同业间交流的桥梁，改变金融同业社交生态圈，改善目前金融同业间信息不对称的现状，让他们更方便的沟通和工作。",
    image: "http://static.sofund.com/matrix/images/app_info_3.png"
}];
export class AppInfo extends Component{
    renderAppInfo(){
        var list = appInfo.map(function (item, index) {
            return (
                <div className="col-md-4" key={index}>
                    <img src={item.image} alt="人人金服MATRIX"/>
                    <p className="subtitle">
                        {item.text}
                    </p>
                </div>
            )
        }.bind(this))

        return list;
    };
    render(){
        return (
            <div>
                <div className="app-info-box">
                    <div className="img-box">
                        <img src="http://static.sofund.com/matrix/images/camputer.png" alt="人人金服MATRIX"/>
                    </div>
                    <div className="text-box">
                        <p>
                            MATRIX是一个集金融大数据分析、实时报价和同业社交于一身的互联网金融平台。目前已为金融市场上多家银行机构、金融投资机构、学术研究机构等提供服务，为我们的客户带来了前所未有的高效便捷体验。
                        </p>
                        <a href="http://matrix.sofund.com" className="btn-lg" target="_blank">网页版</a>
                    </div>
                </div>
                <div className="app-info-row">
                    <div className="container">
                        <div className="row">
                            {this.renderAppInfo()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

