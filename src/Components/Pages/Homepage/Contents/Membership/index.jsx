import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import IconTime from './Images/IcTime@3x.png';
import IconValue from './Images/IcValue@3x.png';
import IconVariety from './Images/IcVariety@3x.png';
import IconEatple from './Images/ImgEatPlus@3x.png';

function FloatBox({ className, icon, title, subTextLine1, subTextLine2 }) {
  return (
    <div className={`${className} float-box`}>
      <div className="float-box-icon">
        <div className="color-line" />
        <img src={icon} alt="Icon Value" />
      </div>
      <div className="text-box-wrap">
        <div className="text-box">
          <div className="title">{title}</div>
          <div className="sub-text">
            {subTextLine1}
            <br />
            {subTextLine2}
          </div>
        </div>
      </div>
    </div>
  );
}

FloatBox.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTextLine1: PropTypes.string.isRequired,
  subTextLine2: PropTypes.string.isRequired,
};

function FloatBoxList() {
  return (
    <ul className="content-membership-float-box-item-list">
      <li className="content-membership-float-box-item">
        <div className="vertical-line" />
        <FloatBox
          className="li-float-box-1"
          icon={IconValue}
          title="소비에 가치를 더하다"
          subTextLine1="내가 평소 자주가던 식당의 메뉴를"
          subTextLine2="5,500원에 즐길 수 있어요!"
        />

        <FloatBox
          className="li-float-box-2"
          icon={IconTime}
          title="식사시간에 여유를 더하다"
          subTextLine1="미리 주문하고 픽업시간을 예약하여"
          subTextLine2="기다림없이 맛있는 식사를!"
        />
      </li>
      <li className="content-membership-float-box-item">
        <div className="vertical-line" />

        <FloatBox
          className="li-float-box"
          icon={IconVariety}
          title="맛에 실속을 더하다"
          subTextLine1="검증된 음식만을 제공하며,"
          subTextLine2="다양한 식사를 선택할 수 있어요!"
        />
      </li>
      <li className="content-membership-float-box-item">
        <div className="vertical-line" />
      </li>
    </ul>
  );
}

function RectangleBox() {
  return (
    <div className="content-membership-background-rectangle-wrap">
      <div className="content-membership-background-rectangle" />
    </div>
  );
}

function EatpleImage() {
  return (
    <div className="content-membership-image-box-wrap">
      <div className="content-membership-image-box">
        <img src={IconEatple} alt="eatple" />
      </div>
    </div>
  );
}

function FloatText() {
  return (
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
  );
}

export default function CotentMembership() {
  return (
    <div className="content-membership-section">
      <div className="content-membership-inner">
        <RectangleBox />
        <FloatBoxList />
        <FloatText />
        <EatpleImage />
      </div>
    </div>
  );
}
