import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

import ImgBackground from '../Images/BgParallex.svg';
import ImgBackground2 from '../Images/BgParallex2.svg';

export default function BackgroundImg() {
  const verticalMovement = 15;

  const interp = i => r =>
    `translate3d(0, ${verticalMovement * Math.sin(r + (i * 2 * Math.PI) / 1.8)}px, 0)`;

  const { radians } = useSpring({
    to: async next => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // eslint-disable-next-line no-await-in-loop
        await next({ radians: 4 * Math.PI });
      }
    },
    from: { radians: 0 },
    config: { duration: 6000 },
    reset: true,
  });

  return (
    <Styled.BackgroundImgWrap>
      <Styled.BackgroundImg>
        <animated.div className="image-wrap" style={{ transform: radians.interpolate(interp(1)) }}>
          <img src={ImgBackground} alt="Background" draggable="false" />
        </animated.div>
        <animated.div className="image-wrap" style={{ transform: radians.interpolate(interp(6)) }}>
          <img src={ImgBackground2} alt="Background2" draggable="false" />
        </animated.div>
      </Styled.BackgroundImg>
    </Styled.BackgroundImgWrap>
  );
}

const Styled = {};

Styled.BackgroundImgWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;
`;

Styled.BackgroundImg = styled.div`
  width: 100%;
  height: 70%;

  .image-wrap {
    position: absolute;
    bottom: -5%;
    right: 0;

    @media (max-aspect-ratio: 1/1) {
      bottom: -10%;
    }

    width: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;
