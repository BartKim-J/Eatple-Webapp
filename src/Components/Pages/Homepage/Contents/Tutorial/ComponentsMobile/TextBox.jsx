import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        바쁘실 땐, 여유있게
        <br />
        <span className="highlight">잇플</span>을 사용하세요
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 12%;
  left: 0;
`;

Styled.Container = styled.div`
  display: inline-block;

  text-align: left;
  font-family: 'S-CoreDream-Bold';
  font-size: 6vw;
  line-height: 1.46;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
    font-size: 24px;
  }

  .highlight {
    color: #fca800;
  }
`;
