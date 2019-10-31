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
  bottom: 6vh;
  left: 0;
`;

Styled.BackgroundImageBox = styled.div`
  .background-image {
    width: 25vw;
  }
`;
