import React from 'react';

import './index.scss';

import ImgWordmark from './Image/ImgWordmark@3x.png';

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-inner">
        <div className="footer-wordmark-wrap">
          <div className="footer-wordmark">
            <img src={ImgWordmark} alt="wordmark" />
          </div>
        </div>

        <div className="footer-copyright-box-wrap">
          <div className="footer-copyright-box">
            서울특별시 서초구 서초동 서초대로 398 패스트파이브 강남 3호점 611호
            <br />
            ©2019 Astera Inc. All rights reserved.
          </div>
        </div>

        <div className="footer-site-map-wrap">
          <ul className="footer-site-map">
            <li>제휴 점포 리스트</li>
            <li>이용약관</li>
            <li>자주 묻는 질문</li>
            <li>개인정보취급방침</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
