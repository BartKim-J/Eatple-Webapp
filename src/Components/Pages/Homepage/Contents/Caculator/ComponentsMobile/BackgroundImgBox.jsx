import React from 'react';
import styled from 'styled-components';

import ImgBackground from '../Images/BgCalculator@3x.png';

export default function BackgroundImgBox() {
  return (
    <Styled.BackgroundImageBoxWrap>
      <Styled.BackgroundImageBox>
        <div className="background-image">
          <img src={ImgBackground} alt="Background" draggable="false" />
        </div>
      </Styled.BackgroundImageBox>
    </Styled.BackgroundImageBoxWrap>
  );
}

const Styled = {};

Styled.BackgroundImageBoxWrap = styled.div`
  position: absolute;
  bottom: 15%;
  left: 0;

  transform: translate(-80%, 40%);

  width: 100%;
`;

Styled.BackgroundImageBox = styled.div`
  width: 100%;
  max-width: 460px;
  height: 50%;

  .background-image {
    width: 100%;

    img {
      width: 100%;
    }
  }
`;
