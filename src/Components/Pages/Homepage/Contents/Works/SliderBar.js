// Standard Include
import React, { Component } from 'react';

// Image Resources

// Components

// Style Sheets
import './ContentWorks.scss';

class SliderBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: this.props.min,
            max: this.props.max,
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp   = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    componentDidMount() {

    };
    
    handleMouseDown(e) {
        this.setState({ isDragging: true });
    }

    handleMouseUp(e) {
        this.setState({ isDragging: false });
    }

    handleMouseMove(e) {
        const { onChange, min, max } = this.props;
        if(this.state.isDragging) {
            const { left, right } = this.rootDOM.getBoundingClientRect();
            const rLeft = left - document.body.getBoundingClientRect().left;

            let value = ((e.clientX - rLeft) / (right - rLeft)) * 100;
            if (value < 0) value = 0;
            if (value > 100) value = 100;

            let retValue = (max/100) * value;
            if (retValue < min) retValue = min;
            if (retValue > max) retValue = max;
     

            this.setState({ value, retValue });
            if(onChange) onChange(retValue);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        const { min, max } = this.props;
        const { isDragging } = this.state;
        let { value } = this.state;

        if (typeof value === 'undefined') {
            value = min;
        }

        return(
            <div
                className="component slider-bar"
                ref={c => { this.rootDOM = c; }}

                onMouseUp={this.handleMouseUp}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}

                onTouchStart={this.handleMouseDown}
                onTouchEnd={this.handleMouseUp}
                onTouchMove={this.handleMouseMove}
            >
                <div
                    className="slider-button"
                    style={{ left: value.toString() + "%" }}
                >
                </div>
            </div>
        );
    }
}

export default SliderBar;