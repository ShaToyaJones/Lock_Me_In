var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img alt="assets/locs1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt="assets/locs2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt="assets/locs3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img alt="assets/locs10.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img alt="assets/locs11.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img alt="assets/locs12.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
});

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));