/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ScrollAnimation from 'react-animate-on-scroll';

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <ScrollAnimation animateIn="bounce">
          바쁘실 땐, 여유있게
          <br />
          <span className="highlight">잇플</span>을 사용하세요
        </ScrollAnimation>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
`;

Styled.Container = styled.div`
  display: inline-block;

  text-align: left;
  font-family: 'S-CoreDream-Bold';
  font-size: 3vw;
  line-height: 1.46;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 46px;
  }

  .highlight {
    color: #fca800;
  }
`;
