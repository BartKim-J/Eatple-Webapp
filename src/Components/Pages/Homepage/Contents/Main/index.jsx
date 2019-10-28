import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import ImgBtnGetStarted from 'resource/Image/Button/BtnGetStarted.svg';
import ImgBtnMediumShadow from 'resource/Image/Button/BtnMediumShadow.svg';
import ImgHero from './Images/ImgHero.png';

function TextBox() {
  return (
    <div className="content-main-text-box-wrap">
      <div className="content-main-text-box">
        <div className="title">
          한끼 식사에
          <br />
          가치를 더하다,
          <span className="highlight"> 잇플</span>
          <div className="sub-text">
            잇플은 한끼 식사를 5500원에 해결할 수 있는 테이크아웃 멤버십입니다.
          </div>
          <div className="btn-box-wrap">
            <Link to="/">
              <button type="button" className="btn-box">
                <div className="button-image">
                  <img src={ImgBtnGetStarted} alt="Button" />
                </div>
                <div className="button-shadow">
                  <img src={ImgBtnMediumShadow} alt="Button" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadImage() {
  return (
    <div className="main-image-wrap">
      <div className="main-image-box">
        <img src={ImgHero} alt="slide-1" />
      </div>
    </div>
  );
}
export default function CotentMain() {
  return (
    <div className="content-main-section">
      <div className="content-main-inner">
        <div className="content-main-head-wrap">
          <div className="content-main-head-box">
            <TextBox />
          </div>
        </div>
        <HeadImage />
      </div>
    </div>
  );
}
