import React from 'react';
import styled from 'styled-components';

import ImgHero from '../Images/imgHero.jpg';

export default function HeroImg() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.ImageBox src={ImgHero} />
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

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  background-position: center center;
  background-size: cover;
`;
