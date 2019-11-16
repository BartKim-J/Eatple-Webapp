/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import urlConf from 'configure/urlConfig';

import ImgBtnGetStarted from 'resource/Image/Button/BtnGetStarted.svg';
import ImgBtnMediumShadow from 'resource/Image/Button/BtnMediumShadow.svg';

export default function TrialButtonBox() {
  const animationButtonBox = useSpring({
    config: { mass: 3, tension: 35, friction: 9 },
    from: { value: 0 },
    to: async next => {
      while (true) {
        await next({
          value: 0.2,
        });
        await next({
          value: 0,
        });
      }
    },
    delay: 1000,
  });

  function trans(value) {
    return `translate3d(-${value}vw, -${value}vw, 0)`;
  }

  return (
    <Styled.TrialButtonBoxWrap>
      <a href={urlConf.KakaoChatbot}>
        <button type="button" className="button-box">
          <Styled.ButtonAnimationWrap
            className="button-image"
            style={{ transform: animationButtonBox.value.interpolate(value => `${trans(value)}`) }}
          >
            <img src={ImgBtnGetStarted} alt="Button" />
          </Styled.ButtonAnimationWrap>
          <div className="button-shadow">
            <img src={ImgBtnMediumShadow} alt="Button" />
          </div>
        </button>
      </a>
    </Styled.TrialButtonBoxWrap>
  );
}

const Styled = {};

Styled.TrialButtonBoxWrap = styled.div`
  padding-top: 10%;
  margin-bottom: 0;

  .button-box {
    position: relative;

    width: 9vw;
    max-width: 150px;
    height: calc(11vw * 0.4);
    min-height: 60px;

    img {
      width: 100%;
      height: 100%;
    }

    .button-image {
      position: absolute;
      top: 0px;
      left: 0px;

      transition: all 0.5s;
    }

    .button-image:hover {
      transform: translate(-0.4vw, -0.4vw) !important;
    }

    .button-shadow {
      position: absolute;
      top: 0px;
      left: 0px;

      z-index: -1;
    }
  }
`;

Styled.ButtonAnimationWrap = styled(animated.div)``;
