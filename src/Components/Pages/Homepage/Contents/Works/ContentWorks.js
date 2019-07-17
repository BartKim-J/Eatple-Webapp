// Standard Include
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderBar from './SliderBar.js'

import AnimatedNumber from "animated-number-react";

// Image Resources

// Components

// Style Sheets
import './ContentWorks.scss';

const controlBox = "control-box";
const displayBox = "display-box";
const resultBox  = "result-box";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

            controlBoxElmt.style.width      = "50vw"
            //controlBoxElmt.style.height     = "100vh"
            //controlBoxElmt.style.transform  = "scale( 0.5 ) translate3d(-50vw, 0, 0)";
            controlBoxElmt.style.transition = "all 0.9s ease 0.2s";

            displayBoxElmt.style.transform  = "translate3d(-50vw, 0, 0)";
            displayBoxElmt.style.transition = "all 1.2s ease 0.4s";

            resultBoxElmt.style.transform   = "translate3d(-50vw, 0, 0)";
            resultBoxElmt.style.transition  = "all 1.2s ease 1.6s";
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
                normalTotal: normalTotal,
                serviceTotal: serviceTotal,
                discountTotal: discountTotal,
            }
        })
    }

    render() {
        const numberDuration   = 500;

        return (
            <div className="content-works">
                <div className="content-works-inner">
                    <div id={controlBox} className="control-box">
                        <div className="control-box-inner">
                            <div className="title">
                                <div className="text">한 달에<br />
                                    <span className="value">{this.state.displayValue}</span> 번<br />
                                    외식대신 잇플하면?<br />
                                </div>
                            </div>

                            <SliderBar className="slider-bar" min="0" max="31" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div id={displayBox} className="display-box">
                        <div className="display-box-inner">
                            <div className="title">
                                <span className="value">
                                    <AnimatedNumber
                                        value={this.state.result.discountTotal}
                                        formatValue={value => `${numberWithCommas(Number(value).toFixed(0))}`}
                                        duration={numberDuration}
                                /></span> 원을<br/>
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
                    </div>

                    <div id={resultBox} className="resultBox">
                        <div className="average">
                            <span className="text">강남 편균 외식비 9,025원 x 15</span>
                            <span className="value">
                                    <AnimatedNumber
                                        value={this.state.result.normalTotal}
                                        formatValue={value => `${numberWithCommas(Number(value).toFixed(0))}`}
                                        duration={numberDuration}
                                />원</span>
                        </div>

                        <div className="result">
                            <span className="text">
                                잇플
                            </span>
                            <span className="value">
                                <AnimatedNumber
                                    value={this.state.result.serviceTotal}
                                    formatValue={value => `${numberWithCommas(Number(value).toFixed(0))}`}
                                    duration={numberDuration}
                            />원</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentWorks;