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

                    <div className="explain-box">
                        <div className="explain-title">
                            <div className="number">01</div> 
                            <div className="title">가입하기</div>
                        </div>
                        <div className="explain-text">
                            월 7,900원<br/>
                            멤버십
                        </div>
                    </div>

                    <div className="explain-box">
                        <div className="explain-title">
                            <div className="number">02</div> 
                            <div className="title">검색하기</div>
                        </div>
                        <div className="explain-text">
                            위치 기반의 지도 및 리스트를 통해<br/>
                            가까운 밀콕 제휴식당의 메뉴를 검색하세요!
                        </div>
                    </div>

                    <div className="explain-box">
                        <div className="explain-title">
                            <div className="number">03</div> 
                            <div className="title">예약하기</div>
                        </div>
                        <div className="explain-text">
                            메뉴를 선택하고<br/>
                            테이크 아웃 시간을 예약하세요.
                        </div>
                    </div>

                    <div className="explain-box">
                        <div className="explain-title">
                            <div className="number">04</div> 
                            <div className="title">픽업하기</div>
                        </div>
                        <div className="explain-text">
                                예약 시간에 맞춰<br/>
                                기다림없이 주문한 음식을 픽업해볼까요?
                        </div>
                    </div>
                    <img 
                    className="explain-image"
                    src="https://mealkok.s3-ap-northeast-1.amazonaws.com/images/Contents/Service/ContentService-Phone.png"
                    alt="service"
                    />
                </div>
            </div>
        );
    }
}

export default ContentService;