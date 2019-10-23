import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import IconTime from './Images/IcTime@3x.png';
import IconValue from './Images/IcValue@3x.png';
import IconVariety from './Images/IcVariety@3x.png';
import IconEatple from './Images/ImgEatPlus@3x.png';

function FloatBox({ className, icon, title, subText }) {
  return (
    <div className={`${className} float-box`}>
      <div className="float-box-icon">
        <div className="color-line" />
        <img src={icon} alt="Icon Value" />
      </div>
      <div className="text-box-wrap">
        <div className="text-box">
          <div className="title">{title}</div>
          <div className="sub-text">{subText}</div>
        </div>
      </div>
    </div>
  );
}

FloatBox.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default function CotentMembership() {
  return (
    <div className="content-membership-section">
      <div className="content-membership-inner">
        <div className="content-membership-background-rectangle-wrap">
          <div className="content-membership-background-rectangle" />
        </div>

        <ul className="content-membership-float-box-list-wrap">
          <li className="content-membership-float-box-list">
            <div className="vertical-line" />
            <FloatBox
              className="li-float-box-1"
              icon={IconValue}
              title="소비에 가치를 더하다"
              subText="내가 평소 자주가던 식당의 메뉴를 5,500원에 즐길 수 있어요!"
            />

            <FloatBox
              className="li-float-box-2"
              icon={IconTime}
              title="소비에 가치를 더하다"
              subText="내가 평소 자주가던 식당의 메뉴를 5,500원에 즐길 수 있어요!"
            />
          </li>
          <li className="content-membership-mini-box">
            <div className="vertical-line" />

            <FloatBox
              className="li-float-box"
              icon={IconVariety}
              title="맛에 실속을 더하다"
              subText="검증된 음식만을 제공하며, 다양한 식사를 선택할 수 있어요"
            />
          </li>
          <li className="content-membership-mini-box">
            <div className="vertical-line" />
          </li>
        </ul>

        <div className="content-membership-text-box-wrap">
          <div className="content-membership-text-box">
            월<span className="highlight">7,900원</span>
            의
            <br />
            멤버십 가입으로
            <br />
            평범했던 식사 시간을
            <br />
            새롭게 채워보세요!
          </div>
        </div>

        <div className="content-membership-image-box-wrap">
          <div className="content-membership-image-box">
            <img src={IconEatple} alt="eatple" />
          </div>
        </div>
      </div>
    </div>
  );
}
