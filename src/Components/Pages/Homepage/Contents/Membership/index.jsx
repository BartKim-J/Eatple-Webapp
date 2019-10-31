import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import mediaConf from 'configure/mediaConfig';

import IconTime from './Images/IcTime.svg';
import IconValue from './Images/IcValue.svg';
import IconVariety from './Images/IcVariety.svg';
import IconEatple from './Images/ImgEatPlus.svg';

const SCROLL_ANCHOR_POINRT = window.innerHeight * 0.73;

function FloatBox({ className, icon, title, subTextLine1, subTextLine2 }) {
  return (
    <Styled.FloatBoxWrap>
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
    </Styled.FloatBoxWrap>
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
  const trans1 = y => `translate3d(0,${y * 0.6}px,0)`;
  const trans2 = y => `translate3d(0,${y * 1.4}px,0)`;
  const trans3 = y => `translate3d(0,${y * 1.0}px,0)`;

  return (
    <Styled.FloatBoxItemList>
      <ul>
        <li className="float-box-item">
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

        <li className="float-box-item">
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

        <li className="float-box-item">
          <div className="vertical-line" />
        </li>
      </ul>
      <FloatText />
    </Styled.FloatBoxItemList>
  );
}
FloatBoxList.propTypes = {
  scrollY: PropTypes.object.isRequired,
};

function RectangleBox() {
  return (
    <Styled.FloatBoxListBackgroundBoxWrap>
      <Styled.FloatBoxListBackgroundBox />
    </Styled.FloatBoxListBackgroundBoxWrap>
  );
}

function EatpleImage() {
  return (
    <Styled.FloatImageBoxWrap>
      <Styled.FloatImageBox>
        <img src={IconEatple} alt="eatple" draggable="false" />
      </Styled.FloatImageBox>
    </Styled.FloatImageBoxWrap>
  );
}

function FloatText() {
  return (
    <Styled.FloatTextBoxWrap>
      <Styled.FloatTextBox>
        월<span className="highlight">7,900원</span>
        의
        <br />
        멤버십 가입으로
        <br />
        평범했던 식사 시간을
        <br />
        새롭게 채워보세요!
      </Styled.FloatTextBox>
    </Styled.FloatTextBoxWrap>
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
    <Styled.Section>
      <Styled.Container>
        <RectangleBox />

        <FloatBoxList scrollY={scrollY} />

        <EatpleImage />
      </Styled.Container>
    </Styled.Section>
  );
}
CotentMembership.propTypes = {
  scrollY: PropTypes.number,
};
CotentMembership.defaultProps = {
  scrollY: 0,
};

const Styled = {};

Styled.Section = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

Styled.FloatBoxListWrap = styled.div``;

Styled.FloatBoxWrap = styled.div`
  z-index: 100;

  .float-box {
    z-index: 100;

    .float-box-icon {
      position: relative;

      .color-line {
        position: absolute;
        top: 0;
        left: -0.16vw;

        background: #fca800;

        height: 3vw;
        width: 0.36vw;

        margin-top: 0.5vw;
      }

      padding-left: 1.4vw;

      img {
        width: 3.2vw;
        max-width: 56px;
      }
    }
    .text-box-wrap {
      .text-box {
        padding: 4vh 1vw 0 1vw;

        .title {
          font-size: 1.2em;
          line-height: 0.86;
          font-family: 'S-CoreDream-6';
        }

        .sub-text {
          margin-top: 1vh;
          font-size: 0.9em;
          line-height: 1.44;
          font-family: 'S-CoreDream-3';
        }
      }
    }
  }
`;

Styled.FloatImageBoxWrap = styled.div`
  position: absolute;
  top: 15vh;
  right: 0;
`;
Styled.FloatImageBox = styled.div`
  width: 25vw;
  max-width: 445px;
`;

Styled.FloatBoxListBackgroundBoxWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
`;

Styled.FloatBoxListBackgroundBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 70vw;
  height: 120vh;

  background-color: #f8f8fa;
`;

Styled.FloatTextBoxWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  margin: 12vh 0vw;
`;

Styled.FloatTextBox = styled.div`
  position: relative;

  width: 30vw;
  max-width: 495px;

  text-align: left;

  font-size: 3em;
  font-family: 'S-CoreDream-5';
  line-height: 1.46;
  color: #222222;

  .highlight {
    color: #fca800;
  }
`;

Styled.FloatBoxItemList = styled.div`
  position: relative;
  width: 100%;
  text-align: left;

  li {
    position: relative;
    display: inline-block;
    width: 25%;
  }

  li:nth-child(1) {
    .li-float-box-1 {
      position: absolute;
      top: -35vh;
    }

    .li-float-box-2 {
      position: absolute;
      top: -30vh;
    }
  }

  li:nth-child(2) {
    .li-float-box {
      position: absolute;
      top: -33vh;
    }
  }

  .float-box-item {
    position: relative;
    height: 100vh;

    .vertical-line {
      position: absolute;
      bottom: 0;

      width: 1px;

      height: 120vh;
      border: solid 0.5px #e0e0e0;
    }
  }
`;
