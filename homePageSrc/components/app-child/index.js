/**
 * Created by Lever on 16/5/12.
 */

// import React, { Component } from 'react';
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';

require("./../apply-use/tryusebackground.css");
// var Slider = require("react-slick");
import { Slider } from './../react-slider/react-slider'
    
var TryuseComponent=require("./../apply-use/usebackground.js");

let indexInfo = [{
    title: "我们精于服务",
    subtitle: "已覆盖并服务国内大多数金融机构，业务上严谨负责值得信赖。",
    image: "http://static.sofund.com/matrix/images/index_service.png"
},{
    title: "我们信奉科技",
    subtitle: "始终坚持以利用人工智能技术促进金融行业发展为自己的使命。",
    image: "http://static.sofund.com/matrix/images/index_tech.png"
},{
    title: "我们怀揣梦想",
    subtitle: "致力于改变金融同业社交生态圈，让他们更方便的沟通和工作。",
    image: "http://static.sofund.com/matrix/images/index_belief.png"
}];
let slideList = [{
    src: "http://static.sofund.com/matrix/images/slide1.png",
    alt: "人人金服MATRIX"
},{
    src: "http://static.sofund.com/matrix/images/slide2.png",
    alt: "人人金服MATRIX"
},{
    src: "http://static.sofund.com/matrix/images/slide3.png",
    alt: "人人金服MATRIX"
}];
export class Index extends Component{
    renderRow(){
        let list = indexInfo.map(function (item, index) {
            return(
                <div className="col-md-12" key={index}>
                    <div className={"text-box " + (index%2 === 0 ? "left" : "right")}>
                        <h3>{item.title}</h3>
                        <p className="subtitle">
                            {item.subtitle}
                        </p>
                    </div>
                    <div className={"img-box " + (index%2 === 0 ? "right" : "left")}>
                        <img src={item.image} alt="人人金服MATRIX"/>
                    </div>
                </div>
            )
        }.bind(this));
        return list;
    }
    renderSlider(){
        let list = slideList.map((item,index)=>{
            return (
                <div key={index}>
                    <img src={item.img} alt={item.alt}/>
                </div>
            )
        });
        return list;
    }
    render(){
        let settings = {
            items: slideList
        };
        return (
            <div>
                <div className="container index-content">
                    <Slider {...settings}></Slider>
                </div>
            </div>
        )
    }
}