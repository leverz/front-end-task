/**
 * Created by renren on 16/5/23.
 */
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';

export class SliderItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { count, item } = this.props;
        let width = 100 / count + '%';
        return (
            <li className="slider-item" style={{width: width}}>
                <img src={item.src} alt={item.alt} />
            </li>
        );
    }
}