import React from 'react';
import styled from 'styled-components';

import ImgBackground from '../Images/BgHowto.jpg';

export default function BackgroundImg() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.ImageBox>
          <img src={ImgBackground} alt="Background" draggable="false" />
        </Styled.ImageBox>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 35%;
  height: 38%;
`;

Styled.Container = styled.div`
  float: right;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

Styled.ImageBox = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
