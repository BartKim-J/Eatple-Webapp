import React, { PureComponent } from 'react';

import imgMockup from './Images/mockup@2x.png';

import './ContentService.scss';

export default class ContentService extends PureComponent {
  render() {
    return (
      <div className="content-service">
        <div className="explain-image-box">
          <img className="explain-image" src={imgMockup} alt="service" />
        </div>

        <div className="content-service-inner">
          <div className="explain-boxs">
            <div className="explain-box">
              <div className="explain-title">
                <div className="number">01</div>
                <div className="title">가입하기</div>
              </div>
              <div className="explain-text">
                월 7,900원
                <br />
                멤버십
              </div>
            </div>

            <div className="explain-box">
              <div className="explain-title">
                <div className="number">02</div>
                <div className="title">검색하기</div>
              </div>
              <div className="explain-text">
                위치 기반의 지도 및 리스트를 통해
                <br />
                가까운 밀콕 제휴식당의 메뉴를 검색하세요!
              </div>
            </div>

            <div className="explain-box">
              <div className="explain-title">
                <div className="number">03</div>
                <div className="title">예약하기</div>
              </div>
              <div className="explain-text">
                메뉴를 선택하고
                <br />
                테이크 아웃 시간을 예약하세요.
              </div>
            </div>

            <div className="explain-box">
              <div className="explain-title">
                <div className="number">04</div>
                <div className="title">픽업하기</div>
              </div>
              <div className="explain-text">
                예약 시간에 맞춰
                <br />
                기다림없이 주문한 음식을 픽업해볼까요?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
