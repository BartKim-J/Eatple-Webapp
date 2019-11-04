import React from 'react';
import styled from 'styled-components';

import ImgHero from '../Images/ImgHero.png';

export default function BackgroundImg() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.ImageBox>
          <img src={ImgHero} alt="Hero" />
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

  width: 50%;
  height: 100%;

  z-index: 100;
`;

Styled.Container = styled.div`
  float: right;

  width: 100%;
  height: 100%;


`;
Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  
  img {
    min-width: 100%;
    min-height: 100%;
  }
`;
