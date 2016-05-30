/**
 * Created by renren on 16/5/23.
 */
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';


export class SliderArrows extends Component {
    constructor(props) {
        super(props);
        this.canClick = true;
        this.count = 0;
    }
    handleArrowClick(option) {
        if(!this.canClick){
            return;
        }
        this.canClick = false;
        this.timer = null;
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.count++;
            this.canClick = true;
            this.props.turn(option);
        },250);
    }
    render() {
        return (
            <div className="slider-arrows-wrap">
                <span
                    className="slider-arrow slider-arrow-left"
                    onClick={this.handleArrowClick.bind(this, -1)}>
                    <img src="http://static.sofund.com/matrix/images/index_arrow_left.png" alt="‹"/>
                </span>
                <span
                    className="slider-arrow slider-arrow-right"
                    onClick={this.handleArrowClick.bind(this, 1)}>
                    <img src="http://static.sofund.com/matrix/images/index_arrow_right.png" alt="›"/>
                </span>
            </div>
        );
    }
}