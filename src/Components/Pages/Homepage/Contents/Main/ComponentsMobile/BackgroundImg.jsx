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
  bottom: 0;
  left: 0;

  width: 100%;
  height: 50%;

  z-index: 100;
`;

Styled.Container = styled.div`
  width: 100%;
  height: 100%;
`;

Styled.ImageBox = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 100%;
    min-height: 100%;
  }
`;
