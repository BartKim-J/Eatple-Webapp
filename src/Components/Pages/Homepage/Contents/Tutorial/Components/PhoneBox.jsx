/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';

import ScrollAnimation from 'react-animate-on-scroll';

import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import clamp from 'lodash-es/clamp';

import ImgPhone from '../Images/ImgPhone.png';
import ImgScreen from '../Images/ImgScreen.png';

export default function PhoneBox() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    // eslint-disable-next-line no-param-reassign
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    });
  });

  return (
    <Styled.Wrap>
      <Styled.Container>
        <ScrollAnimation animateIn="wobble" delay={1200} initiallyVisible={true}>
          <animated.div
            className="animated-phone-box"
            {...bind()}
            style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}
          >
            <Styled.ImageBox src={ImgPhone} />

            <Styled.ScreenBoxWrap>
              <Styled.ScreenBox>
                <Styled.ImageBox src={ImgScreen} />
              </Styled.ScreenBox>
            </Styled.ScreenBoxWrap>
          </animated.div>
        </ScrollAnimation>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};
Styled.PhoneScreenWidth = '24vw';

Styled.Wrap = styled.div`
  position: absolute;
  top: 10%;
  right: 23%;

  z-index: 100;
`;

Styled.Container = styled.div`
  .animated-phone-box {
    width: ${Styled.PhoneScreenWidth};
    max-width: 405px;

    height: calc(${Styled.PhoneScreenWidth} * 2);
    max-height: 892px;

    cursor: -webkit-grab;
  }
`;

Styled.ScreenBoxWrap = styled.div`
  position: absolute;
  top: 0;

  padding: calc(${Styled.PhoneScreenWidth} * 0.044);

  width: 100%;
  height: 100%;

  text-align: center;
`;
Styled.ScreenBox = styled.div`
  position: relative;
  display: inline-block;

  width: 100%;
  height: 100%;

  width: calc(${Styled.PhoneScreenWidth} * 0.883146);
  max-width: 353px;
`;

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};
  background-position: center center;
  background-size: cover;
`;
