import React from 'react';

import './index.scss';

export default function CotentMembership() {
  return (
    <div className="content-membership-section">
      <div className="content-membership-inner">
        <div className="content-membership-mini-boxs-wrap">
          <div className="content-membership-mini-boxs" />
        </div>

        <ul className="content-membership-mini-box-wrap">
          <li className="content-membership-mini-box">
            <div className="vertical-line" />
          </li>
          <li className="content-membership-mini-box">
            <div className="vertical-line" />
          </li>
          <li className="content-membership-mini-box">
            <div className="vertical-line" />
          </li>
        </ul>

        <div className="content-membership-text-box-wrap">
          <div className="content-membership-text-box">
            월
            <span className="highlight">7,900원</span>
            의
            <br />
            멤버십 가입으로
            <br />
            평범했던 식사 시간을
            <br />
            새롭게 채워보세요!
          </div>
        </div>
      </div>
    </div>
  );
}
