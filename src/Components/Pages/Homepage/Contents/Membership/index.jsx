import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import './index.scss';

// import useScrollPosition from 'utils/ScrollPosition';

import IconTime from './Images/IcTime@3x.png';
import IconValue from './Images/IcValue@3x.png';
import IconVariety from './Images/IcVariety@3x.png';
import IconEatple from './Images/ImgEatPlus@3x.png';

const SCROLL_ANCHOR_POINRT = window.innerHeight * 0.78;

function FloatBox({ className, icon, title, subTextLine1, subTextLine2 }) {
  return (
    <div className={`${className} float-box`}>
      <div className="float-box-icon">
        <div className="color-line" />
        <img src={icon} alt="Icon Value" draggable="false" />
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

function FloatBoxList({ scrollY }) {
  const trans1 = y => `translate3d(0,${y / 1.8}px,0)`;
  const trans2 = y => `translate3d(0,${y * 1.4}px,0)`;
  const trans3 = y => `translate3d(0,${y / 1}px,0)`;

  return (
    <div className="content-membership-float-box-item-list">
      <ul>
        <li className="content-membership-float-box-item">
          <div className="vertical-line" />
          <animated.div style={{ transform: scrollY.interpolate(trans1) }}>
            <FloatBox
              className="li-float-box-1"
              icon={IconValue}
              title="소비에 가치를 더하다"
              subTextLine1="내가 평소 자주가던 식당의 메뉴를"
              subTextLine2="5,500원에 즐길 수 있어요!"
            />
          </animated.div>
          <animated.div style={{ transform: scrollY.interpolate(trans2) }}>
            <FloatBox
              className="li-float-box-2"
              icon={IconTime}
              title="식사시간에 여유를 더하다"
              subTextLine1="미리 주문하고 픽업시간을 예약하여"
              subTextLine2="기다림없이 맛있는 식사를!"
            />
          </animated.div>
        </li>

        <li className="content-membership-float-box-item">
          <div className="vertical-line" />
          <animated.div style={{ transform: scrollY.interpolate(trans3) }}>
            <FloatBox
              className="li-float-box"
              icon={IconVariety}
              title="맛에 실속을 더하다"
              subTextLine1="검증된 음식만을 제공하며,"
              subTextLine2="다양한 식사를 선택할 수 있어요!"
            />
          </animated.div>
        </li>

        <li className="content-membership-float-box-item">
          <div className="vertical-line" />
        </li>
      </ul>
      <FloatText />
    </div>
  );
}
FloatBoxList.propTypes = {
  scrollY: PropTypes.object.isRequired,
};

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
        <img src={IconEatple} alt="eatple" draggable="false" />
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
  const calc = scrollY => {
    let retValue = scrollY - window.scrollY / 4;

    if (retValue >= SCROLL_ANCHOR_POINRT) {
      retValue = SCROLL_ANCHOR_POINRT;
    }
    return retValue;
  };

  const [props, set] = useSpring(() => ({
    scrollY: 0,
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  
  const { scrollY } = props;

  function scrollHandler() {
    set({ scrollY: calc(window.scrollY) });
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <div className="content-membership-section">
      <div className="content-membership-inner">
        <RectangleBox />

        <FloatBoxList scrollY={scrollY} />

        <EatpleImage />
      </div>
    </div>
  );
}
CotentMembership.propTypes = {
  scrollY: PropTypes.number,
};
CotentMembership.defaultProps = {
  scrollY: 0,
};
