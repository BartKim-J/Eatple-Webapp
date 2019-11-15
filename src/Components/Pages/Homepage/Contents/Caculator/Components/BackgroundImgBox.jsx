import React from 'react';
import styled from 'styled-components';

import ImgBackground from '../Images/BgCalculator.png';

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
  bottom: 15%;
  left: 0;

  transform: translate(-14%, 20%);

  width: 100%;
`;

Styled.BackgroundImageBox = styled.div`
  width: 30%;
  max-width: 460px;

  img {
    width: 100%;
  }
`;
