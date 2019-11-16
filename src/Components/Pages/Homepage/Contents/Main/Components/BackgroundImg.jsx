import React from 'react';
import styled from 'styled-components';

import ImgHero from '../Images/imgHero@3x.jpg';

export default function BackgroundImg() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.ImageBox src={ImgHero} alt="Hero" />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 45%;
  height: 100%;

  z-index: 100;
`;

Styled.Container = styled.div`
  float: right;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;
Styled.ImageBox = styled.img`
  min-width: 100%;
  height: 100%;
`;
