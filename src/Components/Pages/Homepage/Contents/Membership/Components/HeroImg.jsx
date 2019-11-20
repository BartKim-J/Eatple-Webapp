import React from 'react';
import styled from 'styled-components';

import useScroll from 'components/utils/useScroll';

import ImgHero from '../Images/imgHero.jpg';

export default function HeroImg() {
  const { scrollY } = useScroll();

  return (
    <Styled.Wrap>
      <Styled.Container scrollY={scrollY} offsetY={window.innerHeight}>
        <Styled.Mask />
        <Styled.ImageBox src={ImgHero} scrollY={scrollY} offsetY={window.innerHeight} />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 0;
  right: 40%;

  width: 70%;
  height: 100%;

  z-index: -1;
`;

Styled.Container = styled.div`
  float: right;

  width: 100%;
  height: 100%;

  overflow: hidden;

  transition: 1s ease-out;

  filter: ${props => {
    let value = 100;

    if (props.scrollY > props.offsetY * 0.7) {
      value = 0;
    }

    return `grayscale(${value}%)`;
  }};
`;

Styled.Mask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 60%;

  background: linear-gradient(to bottom, transparent 0%, black 100%);

  z-index: 100;
`;

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  transition: 0.6s ease-out;
  filter: ${props => {
    let value = 3;

    if (props.scrollY > props.offsetY * 0.7) {
      value = 0;
    }

    return `blur(${value}px)`;
  }};

  background-position: center right;
  background-size: cover;
`;
