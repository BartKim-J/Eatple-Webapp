import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import useScroll from 'components/utils/useScroll';

import IconTime from '../Images/IcTime.svg';
import IconValue from '../Images/IcValue.svg';
import IconVariety from '../Images/IcVariety.svg';

import FloatBox from './FloatBox';

export default function FloatBoxList() {
  const { scrollY } = useScroll();

  const [fixTriger, setFixTriger] = useState(false);

  const [scrollAnimation, set] = useSpring(() => ({
    value: 0,
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  set({ value: scrollY });

  const { value } = scrollAnimation;

  function trans(y, movement, anchor) {
    let pos = y * movement;
    let screenHeight = window.innerHeight;

    if (window.innerHeight >= window.innerWidth) {
      screenHeight = window.innerWidth * 0.5625;
    }

    if (pos >= screenHeight * anchor || fixTriger === true) {
      pos = screenHeight * anchor;
    }

    if (y * 1 >= screenHeight * 0.8) {
      setFixTriger(true);
    }

    return `translate3d(0,${pos}px,0)`;
  }

  function opac(y, mass, offset, anchor) {
    if (fixTriger === true) {
      return '1';
    }

    return `${(((y - offset) * mass) / window.innerHeight) * anchor}`;
  }

  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.Item>
          <div className="vertical-line" />
          <animated.div
            style={{
              transform: value.interpolate(y => `${trans(y, 0.4, 0.35)}`),
              opacity: value.interpolate(y => `${opac(y, 3.6, 250, 0.56)}`),
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
              transform: value.interpolate(y => `${trans(y, 1.2, 0.9)}`),
              opacity: value.interpolate(y => `${opac(y, 3.6, 250, 0.56)}`),
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
        </Styled.Item>

        <Styled.Item>
          <div className="vertical-line" />
          <animated.div
            style={{
              transform: value.interpolate(y => `${trans(y, 0.8, 0.65)}`),
              opacity: value.interpolate(y => `${opac(y, 3.6, 250, 0.56)}`),
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

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  width: 40%;
  height: 100%;

  background-color: #f8f8fa;
`;

Styled.Container = styled.ul`
  position: relative;
  left: 0;
  bottom: 0;

  text-align: left;

  width: 100%;
  height: 100%;
`;

Styled.Item = styled.li`
  position: relative;
  display: inline-block;

  width: calc(100% / 2);
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
