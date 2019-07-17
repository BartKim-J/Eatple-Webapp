// Standard Include
import React, { Component } from 'react';

// Image Resources
import imageChef from './Images/Chef.svg'

// Components

// Style Sheets
import './ContentMain.scss';


class ContentMain extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    };
    
    render() {
        return ( 
            <div className="content-main">
                <div className="content-main-inner">
                    <div className="main-image-box">
                        <img className="image" src={imageChef} alt="chef"/>
                    </div>

                    <div className="main-head-box">
                        <div className="text-box">
                            <div className="title">
                                식사에 가치를 더하다,<br/>
                                <span className="highlight">잇플</span>
                                <div className="sub-text">
                                    엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리<br/>
                                    엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리<br/>
                                    엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리<br/>
                                    엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리엘리
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default ContentMain;