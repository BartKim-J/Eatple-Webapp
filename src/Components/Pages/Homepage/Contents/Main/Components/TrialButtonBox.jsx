import React from 'react';
import styled from 'styled-components';

import urlConf from 'configure/urlConfig';

import ImgBtnGetStarted from 'resource/Image/Button/BtnGetStarted.svg';
import ImgBtnMediumShadow from 'resource/Image/Button/BtnMediumShadow.svg';

export default function TrialButtonBox() {
  return (
    <Styled.TrialButtonBoxWrap>
      <a href={urlConf.KakaoChatbot}>
        <button type="button" className="button-box">
          <div className="button-image">
            <img src={ImgBtnGetStarted} alt="Button" />
          </div>
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
      transform: translate(-5%, -9%);
    }

    .button-shadow {
      position: absolute;
      top: 0px;
      left: 0px;

      z-index: -1;
    }
  }
`;
