// Standard Include
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Image Resources

// Components

// Style Sheets
import '../Stylesheet/Contents_Desktop.scss';
import '../Stylesheet/Contents_Tablet.scss';
import '../Stylesheet/Contents_Mobile.scss';


const controlBox = "control-box";
const displayBox = "display-box";
const resultBox  = "result-box";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
            discountValue: 0,
            controlFlag: false,
            result: {
                chicken: 0,
                bugger: 0,
                coffee: 0,
                normalTotal: 0,
                serviceTotal: 0,
                discountTotal: 0,
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.caculDiscount = this.caculDiscount.bind(this);
    }

    handleChange(value) {
        this.setState({ displayValue: Math.round(value)});
        
        if((!this.state.controlFlag) && (this.state.displayValue > 0))
        {
            this.setState({ controlFlag: true});

            let controlBoxElmt = document.getElementById(controlBox);
            let displayBoxElmt = document.getElementById(displayBox);
            let resultBoxElmt  = document.getElementById(resultBox);

            controlBoxElmt.style.transform  = "scale( 0.7 ) translate3d(-45%, -38%, 0)";
            controlBoxElmt.style.transition = "all 1.7s ease 0.1s";

            displayBoxElmt.style.transform  = "translate3d(-50vw, 0, 0)";
            displayBoxElmt.style.transition = "all 1.2s ease 0.3s";

            resultBoxElmt.style.transform   = "translate3d(-50vw, 0, 0)";
            resultBoxElmt.style.transition  = "all 1.2s ease 0.7s";
        }

        this.caculDiscount(this.state.displayValue);
    }
    
    caculDiscount(value)
    {   
        let normalTotal = Math.ceil(value * 9025);
        let serviceTotal = Math.ceil(value * 5000);
        let discountTotal = Math.ceil(normalTotal - serviceTotal);

        let chicken = Math.ceil(discountTotal / 15000);
        let bugger  = Math.ceil(discountTotal  /  2600);
        let coffee  = Math.ceil(discountTotal  /  2500);

        this.setState({
            result: {
                chicken: chicken,
                bugger: bugger,
                coffee: coffee,
                normalTotal: numberWithCommas(normalTotal),
                serviceTotal: numberWithCommas(serviceTotal),
                discountTotal: numberWithCommas(discountTotal),
            }
        })
    }

    render() {
        return (
            <div className="content-works">
                <div id={controlBox} className="controlBox">
                    <div className="title">
                        <p className="text">한 달에<br />
                            <span className="value">{this.state.displayValue}</span> 번<br />
                            외식대신 잇플하면?<br />
                        </p>
                    </div>

                    <SliderBar className="slider-bar" min="0" max="31" onChange={this.handleChange}/>
                </div>

                <div id={displayBox} className="displayBox">
                    <div className="title">
                        <span className="value">{this.state.result.discountTotal}</span> 원을<br/>
                        절약할 수 있어요.
                    </div>
                    <div className="text">
                        <div className="category">교촌치킨
                            <span className="value">{this.state.result.chicken}<span className="counter"> 마리</span></span>
                        </div>
                        <div className="category">맥도날드 치즈 버가
                            <span className="value">{this.state.result.bugger}<span className="counter"> 개</span></span>
                        </div>
                        <div className="category">빽다방 커피
                            <span className="value">{this.state.result.coffee}<span className="counter"> 잔</span></span>
                        </div>
                    </div>
                </div>

                <div id={resultBox} className="resultBox">
                    <div className="average">
                        <span className="text">강남 편균 외식비 9,025원 x 15
                            <span className="value">{this.state.result.normalTotal}원</span>
                        </span>
                    </div>

                    <div className="result">
                        <span className="text">{this.state.result.serviceTotal}원</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentWorks;