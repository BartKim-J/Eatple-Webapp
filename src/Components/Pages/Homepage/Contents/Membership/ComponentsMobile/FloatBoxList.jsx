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
    const screenHeight = window.innerHeight;

    if (pos >= screenHeight * anchor || fixTriger === true) {
      pos = screenHeight * anchor;
    }

    if (y * 1 >= screenHeight * 0.9) {
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
          <animated.div
            style={{
              transform: value.interpolate(y => `${trans(y, 0.6, 0.56)}`),
              opacity: value.interpolate(y => `${opac(y, 3.6, 400, 0.56)}`),
            }}
          >
            <FloatBox
              className="float-box"
              icon={IconValue}
              title="소비에 가치를 더하다"
              subTextLine1="내가 평소 자주가던 식당의 메뉴를"
              subTextLine2="6,000원에 즐길 수 있어요!"
            />
          </animated.div>
          <animated.div
            style={{
              transform: value.interpolate(y => `${trans(y, 0.82, 0.68)}`),
              opacity: value.interpolate(y => `${opac(y, 3.6, 290, 0.56)}`),
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
              transform: value.interpolate(y => `${trans(y, 1.04, 0.8)}`),
              opacity: value.interpolate(y => `${opac(y, 3.6, 280, 0.56)}`),
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
  width: 100%;
  height: 100%;
`;

Styled.Container = styled.ul`
  position: absolute;
  right: 0;
  bottom: 0;

  text-align: left;

  width: 80%;
  height: 100%;
`;

Styled.Item = styled.li`
  display: inline-block;

  width: 100%;
  height: 100%;

  .float-box {
    position: relative;
    top: 0;
    left: 0;

    transform: translate(-8%, -100%);
  }
`;
