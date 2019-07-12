// Standard Include
import React, { Component } from 'react';

// Image Resources

// Components

// Style Sheets
import '../Stylesheet/Contents_Desktop.scss';
import '../Stylesheet/Contents_Tablet.scss';
import '../Stylesheet/Contents_Mobile.scss';

class ContentService extends Component {
    render() {
        return (
            <div className="content-service">
                <div className="explain">
                    <div className="title">
                        <p className="text">
                            <span className="number">01</span> 
                            가입하기
                        </p>
                    </div>
                    <div className="title">
                        <p className="text">
                            <span className="number">02</span> 
                                검색하기
                        </p>
                    </div>
                    <div className="title">
                        <p className="text">
                            <span className="number">03</span> 
                                예약하기
                        </p>
                    </div>
                    <div className="title">
                        <p className="text">
                            <span className="number">04</span> 
                                픽업하기
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentService;