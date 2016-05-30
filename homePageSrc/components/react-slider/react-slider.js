/**
 * Created by renren on 16/5/23.
 */
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';
require('./slider.scss');

import { SliderItem } from './react-slider-item';
import { SliderDots } from './react-slider-dots';
import { SliderArrows } from './react-slider-arrows';

const $ = require("jquery");

export class Slider extends Component{
    constructor(props) {
        super(props);
        var items = [props.items[props.items.length - 1]];
        items = items.concat(props.items);
        items.push(props.items[0]);
        this.state = {
            nowLocal: 0,
            leftValue: "-100%",
            curLeft: 100,
            items: items
        };
    }
    // 向前向后多少
    turn(n) {
        let _n = this.state.nowLocal + n;
        if(_n < 0) {
            _n = _n + this.props.items.length;
        }
        if(_n >= this.props.items.length) {
            _n = _n - this.props.items.length;
        }
        let leftValue = 100 * _n + 100;
        let curLeft = this.state.curLeft;
        // var timer = setInterval(() => {
            if(n > 0){
                //向后
                // this.setState({
                //     leftValue: -(curLeft++) + "%"
                // });
                _n === 0 && (leftValue = 100 * (this.state.items.length - 1));
                $("#sliderUl").animate({left: -leftValue + "%"},()=>{
                    this.setState({
                        curLeft: leftValue
                    });
                    _n === 0 && this.setState({
                        curLeft: 100,
                        leftValue: "-100%"
                    });
                    _n === 0 && ($("#sliderUl").css({left: "-100%"}));
                });
                // if(curLeft >= leftValue){


                    // clearInterval(timer);
                // }
            }else{
                //向前
                // this.setState({
                //     leftValue: -(curLeft--) + "%"
                // });
                _n === this.props.items.length - 1 && (leftValue = 0);
                $("#sliderUl").animate({left: -leftValue + "%"},()=>{
                    this.setState({
                        curLeft: leftValue
                    });
                    _n === this.props.items.length - 1 && this.setState({
                        curLeft: 100 * _n + 100,
                        leftValue: -100 * _n - 100 + "%"
                    });
                    $("#sliderUl").css({left: -100 * _n - 100 + "%"});
                });
                // if(curLeft <= leftValue){

                    // clearInterval(timer);
                // }
            }
        // },1);
        this.setState({nowLocal: _n});
    }
    // 开始自动轮播
    goPlay() {
        if(this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }
    // 暂停自动轮播
    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }
    componentDidMount() {
        this.goPlay();
    }
    componentWillUnmount(){
        this.pausePlay();
    }
    render(){
        let count = this.state.items.length;

        let itemList = [];

        let itemNodes = this.state.items.map((item, idx) => {
            return <SliderItem item={item} count={count} key={'item' + idx} />;
        });

        let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;

        let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;

        return (
            <div
                className="react-slider"
                onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
                <ul style={{
              left: "-100%",
              // transitionDuration: this.props.speed + "s",
              width: this.state.items.length * 100 + "%"
            }} id="sliderUl">
                    {itemNodes}
                </ul>
                {this.props.arrows?arrowsNode:null}
                {this.props.dots?dotsNode:null}
            </div>
        );
    }
}


Slider.defaultProps = {
    // speed: 15,
    delay: 4,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: []
};
Slider.autoPlayFlag = null;
