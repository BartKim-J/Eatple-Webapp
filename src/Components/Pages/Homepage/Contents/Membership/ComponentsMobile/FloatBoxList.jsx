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
    const movement = 0.6;
    const anchor = 0.56;
    let pos = y * movement;
    const screenHeight = window.innerHeight;

    if (pos >= screenHeight * anchor) {
      pos = screenHeight * anchor;
    }

    return `translate3d(0,${pos}px,0)`;
  }

  function trans2(y) {
    const movement = 0.82;
    const anchor = 0.68;
    let pos = y * movement;
    const screenHeight = window.innerHeight;

    if (pos >= screenHeight * anchor) {
      pos = screenHeight * anchor;
    }

    return `translate3d(0,${pos}px,0)`;
  }

  function trans3(y) {
    const movement = 1.04;
    const anchor = 0.8;
    let pos = y * movement;
    const screenHeight = window.innerHeight;

    if (pos >= screenHeight * anchor) {
      pos = screenHeight * anchor;
    }

    return `translate3d(0,${pos}px,0)`;
  }

  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.Item>
          <animated.div
            style={{
              transform: scrollY.interpolate(trans1),
              opacity: scrollY.interpolate(y => `${((y * 1.8) / window.innerHeight) * 0.56}`),
            }}
          >
            <FloatBox
              className="float-box"
              icon={IconValue}
              title="소비에 가치를 더하다"
              subTextLine1="내가 평소 자주가던 식당의 메뉴를"
              subTextLine2="5,500원에 즐길 수 있어요!"
            />
          </animated.div>
          <animated.div
            style={{
              transform: scrollY.interpolate(trans2),
              opacity: scrollY.interpolate(y => `${((y * 1.6) / window.innerHeight) * 0.68}`),
            }}
          >
            <FloatBox
              className="float-box"
              icon={IconTime}
              title="식사시간에 여유를 더하다"
              subTextLine1="미리 주문하고 픽업시간을 예약하여"
              subTextLine2="기다림없이 맛있는 식사를!"
            />
          </animated.div>
          <animated.div
            style={{
              transform: scrollY.interpolate(trans3),
              opacity: scrollY.interpolate(y => `${((y * 1.4) / window.innerHeight) * 0.8}`),
            }}
          >
            <FloatBox
              className="float-box"
              icon={IconVariety}
              title="맛에 실속을 더하다"
              subTextLine1="검증된 음식만을 제공하며,"
              subTextLine2="다양한 식사를 선택할 수 있어요!"
            />
          </animated.div>
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
  width: 100%;
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

  li {
    position: relative;
    display: inline-block;

    width: 100%;
    height: 100%;

    .float-box {
      position: absolute;
      top: 0;
      left: 0;

      transform: translate(0px, -100%);
    }
  }
`;

Styled.Item = styled.li`
  position: relative;
  height: 100%;
`;
