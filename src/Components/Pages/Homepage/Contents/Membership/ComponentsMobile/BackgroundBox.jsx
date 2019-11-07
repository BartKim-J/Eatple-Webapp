import React from 'react';
import styled from 'styled-components';

export default function BackgroundBox() {
  return (
    <StyledMobile.BackgroundBoxWrap>
      <StyledMobile.BackgroundBox />
    </StyledMobile.BackgroundBoxWrap>
  );
}

const StyledMobile = {};

StyledMobile.BackgroundBoxWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

StyledMobile.BackgroundBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 8%;

  width: 76%;
  height: 53%;

  background-color: #f8f8fa;
`;
