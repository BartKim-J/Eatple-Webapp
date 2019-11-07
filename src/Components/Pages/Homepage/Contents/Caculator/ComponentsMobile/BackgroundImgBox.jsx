import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ImgBackground from '../ImagesMobile/BgCalculator@3x.png';

export default function BackgroundImgBox() {
  return (
    <Styled.BackgroundImageBoxWrap>
      <Styled.BackgroundImageBox>
        <img src={ImgBackground} alt="Background" draggable="false" />
      </Styled.BackgroundImageBox>
    </Styled.BackgroundImageBoxWrap>
  );
}

const Styled = {};

Styled.BackgroundImageBoxWrap = styled.div`
  position: absolute;
  bottom: 0%;
  left: -${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};

  transform: translate(-5%, 0%);
`;

Styled.BackgroundImageBox = styled.div`
  width: 100%;
  max-width: 112px;
  height: 30%;

  img {
    width: 100%;
  }
`;
