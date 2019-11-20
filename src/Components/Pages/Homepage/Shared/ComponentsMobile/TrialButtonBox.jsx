/* eslint-disable no-await-in-loop */
import React from 'react';
import styled from 'styled-components';

import urlConf from 'configure/urlConfig';

import ImgBtnGetStarted from 'resource/Image/Button/BtnGetStarted.svg';
import ImgBtnMediumShadow from 'resource/Image/Button/BtnMediumShadow.svg';

export default function TrialButtonBox() {
  return (
    <Styled.TrialButtonBoxWrap>
      <Styled.Container type="button" className="btn-box" aria-label="Trial Eatple">
        <a href={urlConf.KakaoChatbot} target="_blank" aria-label="Trial Eatple" rel="noopener">
          <div className="button-image">
            <Styled.ImageBox src={ImgBtnGetStarted} />
          </div>
          <div className="button-shadow">
            <Styled.ImageBox src={ImgBtnMediumShadow} />
          </div>
        </a>
      </Styled.Container>
    </Styled.TrialButtonBoxWrap>
  );
}

const Styled = {};

Styled.TrialButtonBoxWrap = styled.div`
  padding-top: 10%;
  margin-bottom: 0;
`;

Styled.Container = styled.button`
  position: relative;

  width: 23vw;
  max-width: 150px;
  height: calc(23vw * 0.4);
  max-height: 60px;

  .button-image {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    transition: all 0.5s;

    z-index: 2;
  }

  .button-image:hover {
    transform: translate(-0.4vw, -0.4vw) !important;
  }

  .button-shadow {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    z-index: 1;
  }
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
