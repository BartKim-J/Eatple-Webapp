import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import ImgBtnCTA from 'resource/Image/Button/BtnCTA@3x.png';

import './index.scss';

import ImgCubeJoy from './Images/ImgCubeJoy@3x.png';
import ImgCubePlus from './Images/ImgCubePlus@3x.png';
import ImgCubeWon from './Images/ImgCubeWon@3x.png';
import ImgCubeQuestion from './Images/ImgCubeQ@3x.png';
import ImgBackground from './Images/BgParallex@3x.png';
import ImgBackground2 from './Images/BgParallex2@3x.png';

function TextBox() {
  return (
    <div className="content-tale-text-box-wrap">
      <div className="content-tale-text-box">
        <span className="highlight">잇플</span>을 사용할 수록
        <br />
        <span className="highlight">채워지는 가치</span>를 직접 경험하세요
        <div className="sub-text">지금 잇플 플러스 친구 추가하면 멤버십 비용이 무료!</div>
        <div className="content-tale-btn-box-wrap">
          <div className="content-tale-btn-box">
            <button type="button">
              <Link to="/">
                <img src={ImgBtnCTA} alt="Button CTA" draggable="false" />
              </Link>
            </button>
          </div>
        </div>
        <div className="divider-line" />
        <div className="qna-text-box">
          아직 잇플에 대해 더 궁금하다면?
          <br />
          <Link to="/">
            <span className="qna-highlight">자주 묻는 질문</span>
          </Link>
          을 확인하세요!
        </div>
      </div>
    </div>
  );
}

function BoxAnimationBox({ xy }) {
  const verticalMovement = 6;

  const interp = i => r =>
    `translate3d(0, ${verticalMovement * Math.sin(r + (i * 2 * Math.PI) / 1.8)}px, 0)`;

  const trans1 = (x, y) => `translate3d(${x / 10 + 220}px,${y / 10 + 20}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 8 + 10}px,${y / 8 + 110}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 + 50}px,${y / 6 + 200}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 3.5 + 240}px,${y / 3.5 + 365}px,0)`;

  const { radians } = useSpring({
    to: async next => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // eslint-disable-next-line no-await-in-loop
        await next({ radians: 2 * Math.PI });
      }
    },
    from: { radians: 0 },
    config: { duration: 4000 },
    reset: true,
  });

  return (
    <div className="content-tale-box-animation-box-wrap">
      <div className="content-tale-box-animation-box">
        <animated.div className="cube-wrap" style={{ transform: radians.interpolate(interp(1)) }}>
          <animated.div className="cube-plus" style={{ transform: xy.interpolate(trans1) }}>
            <img src={ImgCubePlus} alt="Cube Plus" draggable="false" />
          </animated.div>
        </animated.div>

        <animated.div className="cube-wrap" style={{ transform: radians.interpolate(interp(2)) }}>
          <animated.div className="cube-joy" style={{ transform: xy.interpolate(trans2) }}>
            <img src={ImgCubeJoy} alt="Cube Joy" draggable="false" />
          </animated.div>
        </animated.div>
        <animated.div className="cube-wrap" style={{ transform: radians.interpolate(interp(3)) }}>
          <animated.div className="cube-won" style={{ transform: xy.interpolate(trans3) }}>
            <img src={ImgCubeWon} alt="Cube Won" draggable="false" />
          </animated.div>
        </animated.div>

        <animated.div className="cube-wrap" style={{ transform: radians.interpolate(interp(4)) }}>
          <animated.div className="cube-question" style={{ transform: xy.interpolate(trans4) }}>
            <img src={ImgCubeQuestion} alt="Cube Question" draggable="false" />
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}
BoxAnimationBox.propTypes = {
  xy: PropTypes.object.isRequired,
};

function BackgroundImg() {
  const verticalMovement = 12;

  const interp = i => r =>
    `translate3d(0, ${verticalMovement * Math.sin(r + (i * 2 * Math.PI) / 1.8)}px, 0)`;

  const { radians } = useSpring({
    to: async next => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // eslint-disable-next-line no-await-in-loop
        await next({ radians: 2 * Math.PI });
      }
    },
    from: { radians: 0 },
    config: { duration: 4000 },
    reset: true,
  });

  return (
    <div className="content-tale-background-image-box-wrap">
      <div className="content-tale-background-image-box">
        <animated.div className="image-in-wrap" style={{ transform: radians.interpolate(interp(1)) }}>
          <img src={ImgBackground} alt="Background" draggable="false" />
        </animated.div>
        <animated.div className="image-out-wrap" style={{ transform: radians.interpolate(interp(2)) }}>
          <img src={ImgBackground2} alt="Background2" draggable="false" />
        </animated.div>
      </div>
    </div>
  );
}

export default function Tale() {
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { xy } = props;

  return (
    <div className="content-tale-section">
      <div className="content-tale-inner">
        <BackgroundImg />
        <div className="content-tale-head-box-wrap">
          <div
            className="content-tale-head-box"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
          >
            <BoxAnimationBox xy={xy} />
            <TextBox />
          </div>
        </div>
      </div>
    </div>
  );
}
Tale.propTypes = {
  xy: PropTypes.object,
};
Tale.defaultProps = {
  xy: {},
};
