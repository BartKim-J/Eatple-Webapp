import React, { PureComponent, useState } from 'react';

import './index.scss';

import imgBtnLeft from './Images/BtnLeft.png';
import imgBtnRight from './Images/BtnRight.png';
import imgBtnFree from './Images/BtnFree.png';
import imgSlider from './Images/Slider-1.png';

export default function CotentMain() {
  return (
    <div className="content-main">
      <div className="content-main-inner">
        <div className="main-head-wrapper">
          <div className="main-head-box">
            <div className="title">
              한끼 식사에
              <br />
              가치를 더하다,
              <span className="highlight"> 잇플</span>
              <div className="sub-text">
                잇플은 한끼 식사를 5500원에 해결할 수 있는 테이크아웃 멤버쉽입니다.
              </div>
            </div>
          </div>
        </div>

        <div className="main-slide-wrapper">
          <div className="main-slide-box">
            <img src={imgSlider} alt="slide-1" />
          </div>

          <button type="button" className="main-slide-btn-left">
            <img src={imgBtnLeft} alt="BtnRight" />
          </button>

          <button type="button" className="main-slide-btn-right">
            <img src={imgBtnRight} alt="BtnLeft" />
          </button>
        </div>
      </div>
    </div>
  );
}
