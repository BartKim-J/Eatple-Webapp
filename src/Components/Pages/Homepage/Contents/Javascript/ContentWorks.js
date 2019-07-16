// Standard Include
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Image Resources

// Components

// Style Sheets
import '../Stylesheet/Contents_Desktop.scss';
import '../Stylesheet/Contents_Tablet.scss';
import '../Stylesheet/Contents_Mobile.scss';


const controlBox = "control-box"
const displayBox = "display-box"

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
    handleMouseDown(e) {
        this.setState({ isDragging: true });
        e.stopPropagation();
        e.preventDefault();
    }

    handleMouseUp(e) {
        this.setState({ isDragging: false });
        e.stopPropagation();
        e.preventDefault();
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

SliderBar.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired
};

class ContentWorks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayValue: 0,
            controlFlag: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ displayValue: Math.round(value)});
        
        if((!this.state.controlFlag) && (this.state.displayValue > 0))
        {
            this.setState({ controlFlag: true});

            let controlBoxElmt = document.getElementById(controlBox);
            let displayBoxElmt = document.getElementById(displayBox);

            controlBoxElmt.style.transform  = "translate3d(-25%, 0, 0)";
            controlBoxElmt.style.transition = "all .7s ease 0.1s";

            displayBoxElmt.style.transform  = "translate3d(-65vw, 0, 0)";
            displayBoxElmt.style.transition = "all .7s ease 0.1s";
        }
    }

    render() {
        return (
            <div className="content-works">
                <div id={controlBox} className="controlBox">
                    <div className="title">
                        <p className="text">한 달에<br />
                            <span className="value">{this.state.displayValue}</span> 번<br />
                            외식대신 밀콕하면?<br />
                        </p>
                    </div>

                    <SliderBar className="slider-bar" min="0" max="25" onChange={this.handleChange}/>
                </div>

                <div id={displayBox} className="displayBox">
                    OH<br/>
                    {this.state.displayValue}<br/>
                    OH
                </div>
            </div>
        );
    }
}

export default ContentWorks;