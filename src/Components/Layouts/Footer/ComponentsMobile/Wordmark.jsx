import React from 'react';
import styled from 'styled-components';

import ImgWordmark from '../Images/ImgWordmark.svg';

export default function Wordmark() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <img src={ImgWordmark} alt="wordmark" draggable="false" />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;

  top: 0;
  left: 0;
`;

Styled.Container = styled.div`
  width: 12vw;
  max-width: 86px;

  img {
    width: 100%;
  }
`;
