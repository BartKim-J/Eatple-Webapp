import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import clamp from 'lodash-es/clamp';

import ImgPhone from '../Images/ImgPhone@3x.png';
import ImgScreen from '../Images/ImgScreen@3x.png';

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
        <animated.div
          className="animated-phone-box"
          {...bind()}
          style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}
        >
          <img src={ImgPhone} alt="Phone" draggable="false" />

          <Styled.ScreenBoxWrap>
            <Styled.ScreenBox>
              <img src={ImgScreen} alt="Screen" draggable="false" />
            </Styled.ScreenBox>
          </Styled.ScreenBoxWrap>
        </animated.div>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};
Styled.PhoneScreenWidth = '40vw';

Styled.Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 100;
`;

Styled.Container = styled.div`
  .animated-phone-box {
    width: ${Styled.PhoneScreenWidth};
    max-width: 405px;

    cursor: -webkit-grab;

    img {
      width: 100%;
    }
  }
`;

Styled.ScreenBoxWrap = styled.div`
  position: absolute;
  top: 0;

  padding: calc(${Styled.PhoneScreenWidth} * 0.044);
  width: ${Styled.PhoneScreenWidth};
  max-width: 405px;

  text-align: center;
`;
Styled.ScreenBox = styled.div`
  position: relative;
  display: inline-block;

  width: calc(${Styled.PhoneScreenWidth} * 0.883146);
  max-width: 353px;
`;
