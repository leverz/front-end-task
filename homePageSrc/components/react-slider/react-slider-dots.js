/**
 * Created by renren on 16/5/23.
 */
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';

export class SliderDots extends Component {
    constructor(props) {
        super(props);
        this.canClick = true;
    }

    handleDotClick(i) {
        if(!this.canClick){
            return;
        }
        this.canClick = false;
        this.timer = null;
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.canClick = true;
            this.dotClickAction(i);
        },250);
    }
    dotClickAction(i){
        var option = i - this.props.nowLocal;
        this.props.turn(option);
    }
    render() {
        let dotNodes = [];
        let { count, nowLocal } = this.props;
        for(let i = 0; i < count - 2; i++) {
            dotNodes[i] = (
                <span
                    key={'dot' + i}
                    className={"slider-dot" + ((i === this.props.nowLocal) ? " slider-dot-selected" : "")}
                    onClick={this.handleDotClick.bind(this, i)}>
        </span>
            );
        }
        return (
            <div className="slider-dots-wrap">
                {dotNodes}
            </div>
        );
    }
}