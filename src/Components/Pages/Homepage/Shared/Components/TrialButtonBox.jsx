/* eslint-disable no-await-in-loop */
import React from 'react';
import styled from 'styled-components';

import urlConf from 'configure/urlConfig';

import ImgBtnGetStarted from 'resource/Image/Button/BtnGetStarted.svg';
import ImgBtnMediumShadow from 'resource/Image/Button/BtnMediumShadow.svg';

export default function TrialButtonBox() {
  return (
    <Styled.Wrap>
      <Styled.Container type="button" className="btn-box">
        <a href={urlConf.KakaoChatbot}>
          <div className="button-image">
            <img src={ImgBtnGetStarted} alt="Button" />
          </div>
          <div className="button-shadow">
            <img src={ImgBtnMediumShadow} alt="Button" />
          </div>
        </a>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  padding-top: 10%;
  margin-bottom: 0;
`;

Styled.Container = styled.button`
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

    z-index: 2;
  }

  .button-image:hover {
    transform: translate(-0.4vw, -0.4vw) !important;
  }

  .button-shadow {
    position: absolute;
    top: 0px;
    left: 0px;

    z-index: 1;
  }
`;
