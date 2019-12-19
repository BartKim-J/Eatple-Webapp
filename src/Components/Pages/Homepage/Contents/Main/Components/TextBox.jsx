import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

import mediaConf from 'configure/mediaConfig';

import YoutubeButtonBox from './YoutubeButtonBox';

export default function TextBox() {
  const animatedTextBox = useSpring({
    config: { mass: 1, tension: 45, friction: 9 },
    from: { width: '100%' },
    to: async next => {
      await next({
        width: `60%`,
      });
    },
    delay: 500,
  });

  const animatedText = useSpring({
    config: { mass: 1, tension: 35, friction: 9 },
    from: { left: '-200%' },
    to: async next => {
      await next({
        left: `10%`,
      });
    },

    delay: 800,
  });
  
  return (
    <Styled.TextBoxWrap style={animatedTextBox}>
      <Styled.TextBox style={animatedText}>
        <div className="title">
          한끼 식사에
          <br />
          가치를 더하다,
          <span className="highlight"> 잇플</span>
          <div className="sub-text">
            잇플은 한끼 식사를 6,000원에 해결할 수 있는 테이크아웃 서비스입니다.
          </div>
        </div>
        <YoutubeButtonBox />
      </Styled.TextBox>
    </Styled.TextBoxWrap>
  );
}

const Styled = {};

Styled.TextBoxWrap = styled(animated.div)`
  position: relative;

  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: left;

  background-color: #ffffff;
`;

Styled.TextBox = styled(animated.div)`
  position: absolute;

  display: inline-block;

  .video-box {
    position: relative;
    left: 5%;

    outline: none;

    cursor: pointer;

    vertical-align: middle;
    
    .color-line {
      position: absolute;
      top: 0;
      left: -5%;

      height: 100%;
      width: 1.2%;
      max-width: 5px;

      background: #fca800;
    }
    
    .text {
      text-align: left;
      font-family: 'S-CoreDream';
      font-size: 2vw;

      color: #2c2c2c;

      @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
        font-size: 25px;
      }
    }

    .play-button {
      margin-left: 2%;
      width: 2vw;
      max-width: 32px;
      height: 2vw;
      max-height: 32px;
    }

    margin-bottom: 10%;
  }

  .title {
    text-align: left;
    font-family: 'S-CoreDream';
    font-size: 4vw;
    line-height: 1.33;

    color: #2c2c2c;

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 60px;
    }
  }

  .highlight {
    font-family: 'S-CoreDream-Bold';
  }

  .sub-text {
    margin-top: 23px;

    font-size: 1vw;

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 18px;
    }
  }
`;
