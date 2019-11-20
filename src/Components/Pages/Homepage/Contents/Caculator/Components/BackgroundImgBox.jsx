import React from 'react';
import styled from 'styled-components';

import ImgBackground from '../Images/BgCalculator.jpg';

export default function BackgroundImgBox() {
  return (
    <Styled.BackgroundImageBoxWrap>
      <Styled.BackgroundImageBox>
        <Styled.ImageBox src={ImgBackground} />
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
  height: 34%;
`;

Styled.BackgroundImageBox = styled.div`
  width: 30%;
  max-width: 460px;
  height: 100%;
  max-height: 354px;

  img {
    width: 100%;
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
