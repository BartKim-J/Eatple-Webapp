import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated } from 'react-spring';

import IconTime from '../Images/IcTime.svg';
import IconValue from '../Images/IcValue.svg';
import IconVariety from '../Images/IcVariety.svg';

import FloatBox from './FloatBox';

export default function FloatBoxList({ scrollY }) {
  function trans1(y) {
    const movement = 0.4;
    const anchor = 0.3;
    let pos = y * movement;
    let screenHeight = window.innerHeight;

    if (screenHeight >= window.innerWidth) {
      screenHeight = window.innerWidth * 0.5625;
    }

    if (pos >= screenHeight * anchor) {
      pos = screenHeight * anchor;
    }

    return `translate3d(0,${pos}px,0)`;
  }

  function trans2(y) {
    const movement = 1;
    const anchor = 0.9;
    let pos = y * movement;
    let screenHeight = window.innerHeight;

    if (screenHeight >= window.innerWidth) {
      screenHeight = window.innerWidth * 0.5625;
    }

    if (pos >= screenHeight * anchor) {
      pos = screenHeight * anchor;
    }

    return `translate3d(0,${pos}px,0)`;
  }

  function trans3(y) {
    const movement = 0.7;
    const anchor = 0.6;
    let pos = y * movement;
    let screenHeight = window.innerHeight;

    if (screenHeight >= window.innerWidth) {
      screenHeight = window.innerWidth * 0.5625;
    }

    if (pos >= screenHeight * anchor) {
      pos = screenHeight * anchor;
    }

    return `translate3d(0,${pos}px,0)`;
  }

  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.Item>
          <div className="vertical-line" />
          <animated.div style={{ transform: scrollY.interpolate(trans1) }}>
            <FloatBox
              className="float-box"
              icon={IconValue}
              title="소비에 가치를 더하다"
              subTextLine1="내가 평소 자주가던 식당의 메뉴를"
              subTextLine2="5,500원에 즐길 수 있어요!"
            />
          </animated.div>
          <animated.div style={{ transform: scrollY.interpolate(trans2) }}>
            <FloatBox
              className="float-box"
              icon={IconTime}
              title="식사시간에 여유를 더하다"
              subTextLine1="미리 주문하고 픽업시간을 예약하여"
              subTextLine2="기다림없이 맛있는 식사를!"
            />
          </animated.div>
        </Styled.Item>

        <Styled.Item>
          <div className="vertical-line" />
          <animated.div style={{ transform: scrollY.interpolate(trans3) }}>
            <FloatBox
              className="float-box"
              icon={IconVariety}
              title="맛에 실속을 더하다"
              subTextLine1="검증된 음식만을 제공하며,"
              subTextLine2="다양한 식사를 선택할 수 있어요!"
            />
          </animated.div>
        </Styled.Item>

        <Styled.Item>
          <div className="vertical-line" />
        </Styled.Item>
      </Styled.Container>
    </Styled.Wrap>
  );
}
FloatBoxList.propTypes = {
  scrollY: PropTypes.object.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: relative;
  width: 75%;
  height: 100%;
`;

Styled.Container = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;

  text-align: left;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

Styled.Item = styled.li`
  position: relative;
  display: inline-block;

  width: calc(100% / 3);
  height: 100%;

  .float-box {
    position: absolute;
    top: 0;
    left: 0;

    transform: translate(0px, -100%);
  }
  .vertical-line {
    position: absolute;
    bottom: 0;

    width: 1px;

    height: 100%;
    border: solid 0.5px #e0e0e0;
  }
`;
