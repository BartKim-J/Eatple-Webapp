import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import ImgBtnCTA from './Images/BtnCTA@3x.png';
import ImgHero from './Images/ImgHero.jpg';

export default function CotentMain() {
  return (
    <div className="content-main-section">
      <div className="content-main-inner">
        <div className="content-main-head-wrap">
          <div className="content-main-head-box">
            <div className="content-main-text-box-wrap">
              <div className="content-main-text-box">
                <div className="title">
                  한끼 식사에
                  <br />
                  가치를 더하다,
                  <span className="highlight"> 잇플</span>
                  <div className="sub-text">
                    잇플은 한끼 식사를 5500원에 해결할 수 있는 테이크아웃 멤버쉽입니다.
                  </div>
                </div>
                <div className="content-main-btn-box-wrap">
                  <div className="content-main-btn-box">
                    <button type="button" onClick="window.location.href='http://www.daum.net'">
                      <Link to="/">
                        <img src={ImgBtnCTA} alt="Button CTA" />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-image-wrap">
          <div className="main-image-box">
            <img src={ImgHero} alt="slide-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
