import React from 'react';
import styled from 'styled-components';

import ImgHero from '../Images/imgHero.jpg';

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
  bottom: 0;
  left: 0;

  width: 100%;
  height: 50%;

  z-index: 100;

  overflow: hidden;
`;

Styled.Container = styled.div`
  width: 100%;
  height: 100%;
`;

Styled.ImageBox = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 100%;
  min-height: 100%;
`;
