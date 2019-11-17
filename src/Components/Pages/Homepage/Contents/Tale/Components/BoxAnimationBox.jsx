/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

import ImgCubeJoy from '../Images/ImgCubeJoy.svg';
import ImgCubePlus from '../Images/ImgCubePlus.svg';
import ImgCubeWon from '../Images/ImgCubeWon.svg';
import ImgCubeQuestion from '../Images/ImgCubeQ.svg';

import BackgroundImg from './BackgroundImg';

export default function BoxAnimationBox({ xy }) {
  const verticalMovement = 12;

  const interp = i => r =>
    `translate3d(0, ${verticalMovement * Math.sin(r + (i * 6 * Math.PI) / 1.8)}px, 0)`;

  const trans1 = (x, y) => `translate3d(${x / 3 + 300}%,${y / 3 + 200}%,0)`;
  const trans2 = (x, y) => `translate3d(${x / 7 + 10}%,${y / 3 + 200}%,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 + 25}%,${y / 5 + 220}%,0)`;
  const trans4 = (x, y) => `translate3d(${x / 21 + 80}%,${y / 21 + 150}%,0)`;

  const [{ radians }, set, stop] = useSpring(() => ({
    to: async next => {
      while (true) {
        await next({ radians: 2 * Math.PI });
      }
    },
    from: { radians: 0 },
    config: { duration: 3000 },
  }));

  useEffect(() => {
    const cleanUp = () => {
      stop();
    };

    return cleanUp;
  }, [stop]);

  return (
    <Styled.BoxAnimationBoxWrap>
      <BackgroundImg />
      <Styled.BoxAnimationBox>
        <animated.div className="cube-wrap" style={{ transform: radians.interpolate(interp(2)) }}>
          <animated.div className="cube-plus" style={{ transform: xy.interpolate(trans1) }}>
            <img src={ImgCubePlus} alt="Cube Plus" draggable="false" />
          </animated.div>
        </animated.div>

        <animated.div className="cube-wrap" style={{ transform: radians.interpolate(interp(1)) }}>
          <animated.div className="cube-joy" style={{ transform: xy.interpolate(trans2) }}>
            <img src={ImgCubeJoy} alt="Cube Joy" draggable="false" />
          </animated.div>
        </animated.div>

        <animated.div className="cube-wrap" style={{ transform: radians.interpolate(interp(3)) }}>
          <animated.div className="cube-won" style={{ transform: xy.interpolate(trans3) }}>
            <img src={ImgCubeWon} alt="Cube Won" draggable="false" />
          </animated.div>
        </animated.div>

        <animated.div className="cube-wrap" style={{ transform: radians.interpolate(interp(1)) }}>
          <animated.div className="cube-question" style={{ transform: xy.interpolate(trans4) }}>
            <img src={ImgCubeQuestion} alt="Cube Question" draggable="false" />
          </animated.div>
        </animated.div>
      </Styled.BoxAnimationBox>
    </Styled.BoxAnimationBoxWrap>
  );
}
BoxAnimationBox.propTypes = {
  xy: PropTypes.object.isRequired,
};

const Styled = {};

Styled.BoxAnimationBoxWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80%;
  height: 120%;

  overflow: hidden;
`;

Styled.BoxAnimationBox = styled.div`
  position: absolute;
  right: 10%;
  bottom: 0;

  width: 50%;
  height: 100%;

  img {
    width: 100%;
  }

  .cube-plus {
    position: absolute;
    top: 0;
    width: 9vw;
    max-width: 93px;
  }
  .cube-joy {
    position: absolute;
    top: 0;
    right: 0;

    width: 9vw;
    max-width: 158px;
  }
  .cube-won {
    position: absolute;
    top: 0;

    width: 12vw;
    max-width: 216px;
  }
  .cube-question {
    position: absolute;
    top: 0;

    width: 24vw;
    max-width: 432px;
  }
`;
