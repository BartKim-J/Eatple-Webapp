import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import ImgSlideMain from './Images/imgMenu@3x.png';
import ImgSlideSub1 from './Images/ImgMenuSub1@3x.png';

import ImgBtnPartner from './Images/BtnCTA@3x.png';
import ImgBtnSlideLeft from './Images/BtnLeft@3x.png';
import ImgBtnSlideRight from './Images/BtnRight@3x.png';

function TextBox() {
  return (
    <div className="content-menu-slide-text-box-wrap">
      <div className="content-menu-slide-text-box">
        <div className="title">
          잇플의 1차 서비스 지역은
          <br />
          <span className="highlight">강남 / 역삼</span> 부근입니다
          <div className="btn-box-wrap">
            <div className="btn-box">
              <button type="button">
                <Link to="/">
                  <img src={ImgBtnPartner} alt="Button" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuSlider() {
  // let storeName = '유부남';
  // let storeAddress = '주소주소주소주소';
  // let menuName = '유부초밥 & 셀러드';

  const dummyItem = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="content-menu-slide-slider-wrap">
      <div className="content-menu-slide-slider">
        <div className="content-menu-slide-main-box">
          <img src={ImgSlideMain} alt="Button" draggable="false" />
        </div>
        <div className="content-menu-slide-sub-box">
          <div className="slider-info-box-wrap">
            <div className="slider-info-box">
              <div className="slider-button-box-wrap">
                <div className="slider-button-box">
                  <button type="button" className="slider-button">
                    <img src={ImgBtnSlideLeft} alt="Button" draggable="false" />
                  </button>

                  <button type="button" className="slider-button">
                    <img src={ImgBtnSlideRight} alt="Button" draggable="false" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-box-item-list">
            <ul>
              {dummyItem.map(dummyEntryItem => {
                return (
                  <li key={dummyEntryItem}>
                    <img src={ImgSlideSub1} alt="Sub" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CotentMenuSlider() {
  return (
    <div className="content-menu-slide-section">
      <div className="content-menu-slide-inner">
        <TextBox />
        <MenuSlider />
      </div>
    </div>
  );
}
