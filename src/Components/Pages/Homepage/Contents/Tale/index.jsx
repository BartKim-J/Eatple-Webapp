import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import ImgBtnGetStarted from 'resource/Image/Button/BtnGetStarted.svg';
import ImgBtnMediumShadow from 'resource/Image/Button/BtnMediumShadow.svg';

import mediaConf from 'configure/mediaConfig';

import ImgCubeJoy from './Images/ImgCubeJoy.svg';
import ImgCubePlus from './Images/ImgCubePlus.svg';
import ImgCubeWon from './Images/ImgCubeWon.svg';
import ImgCubeQuestion from './Images/ImgCubeQ.svg';

import ImgBackground from './Images/BgParallex.svg';
import ImgBackground2 from './Images/BgParallex2.svg';

// import SvgFloatItem1 from './Images/FloatItem1.svg';
// import SvgFloatItem2 from './Images/FloatItem2.svg';
// import SvgFloatItem3 from './Images/FloatItem3.svg';

function TextBox() {
  return (
    <Styled.TextBoxWrap>
      <Styled.TextBox>
        <span className="highlight">잇플</span>을 사용할 수록
        <br />
        <span className="highlight">채워지는 가치</span>를 직접 경험하세요
        <div className="sub-text">지금 잇플 플러스 친구 추가하면 멤버십 비용이 무료!</div>
        <div className="btn-box-wrap">
          <Link to="/">
            <button type="button" className="btn-box">
              <div className="button-image">
                <img src={ImgBtnGetStarted} alt="Button" />
              </div>
              <div className="button-shadow">
                <img src={ImgBtnMediumShadow} alt="Button" />
              </div>
            </button>
          </Link>
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
      </Styled.TextBox>
    </Styled.TextBoxWrap>
  );
}

function BoxAnimationBox({ xy }) {
  const verticalMovement = 12;

  const interp = i => r =>
    `translate3d(0, ${verticalMovement * Math.sin(r + (i * 2 * Math.PI) / 1.8)}px, 0)`;

  const trans1 = (x, y) => `translate3d(${x / 10 + 220}px,${y / 10 + 20}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 8 + 10}px,${y / 8 + 110}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 + 25}px,${y / 6 + 200}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 3.5 + 230}px,${y / 3.5 + 345}px,0)`;

  const { radians } = useSpring({
    to: async next => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // eslint-disable-next-line no-await-in-loop
        await next({ radians: 2 * Math.PI });
      }
    },
    from: { radians: 0 },
    config: { duration: 3000 },
    reset: true,
  });

  return (
    <Styled.BoxAnimationBoxWrap>
      <Styled.BoxAnimationBox>
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
      </Styled.BoxAnimationBox>
    </Styled.BoxAnimationBoxWrap>
  );
}
BoxAnimationBox.propTypes = {
  xy: PropTypes.object.isRequired,
};

function BackgroundImg() {
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
        <animated.div
          className="image-in-wrap"
          style={{ transform: radians.interpolate(interp(1)) }}
        >
          <img src={ImgBackground} alt="Background" draggable="false" />
        </animated.div>
        <animated.div
          className="image-out-wrap"
          style={{ transform: radians.interpolate(interp(6)) }}
        >
          <img src={ImgBackground2} alt="Background2" draggable="false" />
        </animated.div>
      </Styled.BackgroundImg>
    </Styled.BackgroundImgWrap>
  );
}

export default function ContentTale() {
  const calc = (x, y) => [x - window.innerWidth * 0.6, y - window.innerHeight * 0.5];

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { xy } = props;

  return (
    <Styled.Section>
      <Styled.Container>
        <BackgroundImg />
        <Styled.HeadBoxWrap>
          <Styled.HeadBox onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <BoxAnimationBox xy={xy} />
            <TextBox />
          </Styled.HeadBox>
        </Styled.HeadBoxWrap>
      </Styled.Container>
    </Styled.Section>
  );
}
ContentTale.propTypes = {
  xy: PropTypes.array,
};
ContentTale.defaultProps = {
  xy: [0, 0],
};

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 718px;

  z-index: 100;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

Styled.HeadBoxWrap = styled.div`
  position: relative;
`;
Styled.HeadBox = styled.div`
  height: 718px;
`;

Styled.BackgroundImgWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

Styled.BackgroundImg = styled.div`
  width: 80vw;

  .image-in-wrap {
    position: absolute;
    bottom: -2vh;
    left: 0;

    width: 100%;
  }

  .image-out-wrap {
    position: absolute;
    bottom: -2vh;
    left: 0;

    width: 100%;
  }
`;

Styled.TextBoxWrap = styled.div`
  position: absolute;
  left: 0;
  width: 55%;
`;

Styled.TextBox = styled.div`
  padding: 117px 0;

  text-align: left;

  font-family: 'S-CoreDream-5';
  font-size: calc(2.6vw * 0.8);
  line-height: 1.46;

  color: #1c1c1c;

  .highlight {
    color: #fca800;
  }

  .sub-text {
    margin-top: 16px;

    font-family: 'S-CoreDream-3';
    font-size: 0.36em;
    line-height: 1.6;
  }

  .btn-box-wrap {
    padding-top: 10vh;
    margin-bottom: 0;

    .btn-box {
      position: relative;
      width: 150px;
      height: 60px;

      .button-image {
        position: absolute;
        top: 0px;
        left: 0px;

        transition: all 0.5s;
      }

      .button-image:hover {
        transform: translate(-5px, -5px);
      }

      .button-shadow {
        position: absolute;
        top: 0px;
        left: 0px;

        z-index: -1;
      }
    }
  }

  .divider-line {
    margin: 121px 0 34px 0;
    width: 70%;
    height: 1px;
    border: solid 1px #ececed;
  }

  .qna-text-box {
    font-family: 'S-CoreDream-3';
    font-size: 0.5em;
    line-height: 1.44;

    .qna-highlight {
      font-family: 'S-CoreDream-6';
      text-decoration: underline;
    }
  }
`;

Styled.BoxAnimationBoxWrap = styled.div`
  position: absolute;
  right: 0;

  width: 100%;
  height: 718px;
`;
Styled.BoxAnimationBox = styled.div`
  position: absolute;
  right: 0;

  width: 45%;

  height: 718px;

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
