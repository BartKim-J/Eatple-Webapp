/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import ImgBtnPartner from '../Images/BtnViewMore.svg';
import ImgBtnMediumShadow from '../Images/BtnMediumShadow.svg';

export default function ButtonBox() {
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
    <Styled.Wrap>
      <Link to="/">
        <Styled.Container type="button" className="btn-box">
          <Styled.ButtonAnimationWrap
            className="button-image"
            style={{ transform: animationButtonBox.value.interpolate(value => `${trans(value)}`) }}
          >
            <img src={ImgBtnPartner} alt="Button" />
          </Styled.ButtonAnimationWrap>
          <div className="button-shadow">
            <img src={ImgBtnMediumShadow} alt="Button" />
          </div>
        </Styled.Container>
      </Link>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  margin-bottom: 0;
`;

Styled.Container = styled.button`
  position: relative;

  width: 12vw;
  max-width: 180px;
  height: calc(16vw * 0.33);
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
`;

Styled.ButtonAnimationWrap = styled(animated.div)``;
