import React from 'react';
import styled from 'styled-components';

export default function BackgroundBox() {
  return (
    <Styled.BackgroundBoxWrap>
      <Styled.BackgroundBox />
    </Styled.BackgroundBoxWrap>
  );
}

const Styled = {};

Styled.BackgroundBoxWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

Styled.BackgroundBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 35%;
  height: 100%;

  background-color: #f8f8fa;
`;
