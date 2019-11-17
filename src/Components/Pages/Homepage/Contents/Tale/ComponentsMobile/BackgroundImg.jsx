/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

import ImgBackground from '../Images/BgParallex.svg';
import ImgBackground2 from '../Images/BgParallex2.svg';

export default function BackgroundImg() {
  const verticalMovement = 5;

  const interp = i => r =>
    `translate3d(0, ${verticalMovement * Math.sin(r + (i * 2 * Math.PI) / 1.8)}px, 0)`;

  const [{ radians }, set, stop] = useSpring(() => ({
    to: async next => {
      while (true) {
        await next({ radians: 4 * Math.PI });
      }
    },
    from: { radians: 0 },
    config: { duration: 6000 },
  }));

  useEffect(() => {
    const cleanUp = () => {
      stop();
    };

    return cleanUp;
  }, [stop]);

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
  height: 90%;

  .image-wrap {
    position: absolute;
    bottom: -3%;
    right: 0;

    width: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;
