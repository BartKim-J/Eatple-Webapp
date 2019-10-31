import React from 'react';
import styled from 'styled-components';

import ImgHero from '../Images/ImgHero.png';

export default function BackgroundImageBox() {
  return (
    <Styled.HeadImageBoxWrap>
      <Styled.HeadImageBox>
        <img src={ImgHero} alt="slide-1" />
      </Styled.HeadImageBox>
    </Styled.HeadImageBoxWrap>
  );
}

const Styled = {};

Styled.HeadImageBoxWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 100;
`;

Styled.HeadImageBox = styled.div`
  overflow: hidden;
  max-width: 50vw;

  img {
    width: unset;
    height: 100vh;
  }
`;
