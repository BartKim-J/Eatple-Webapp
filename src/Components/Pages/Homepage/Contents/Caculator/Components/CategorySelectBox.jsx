import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function CategorySelectBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        당신이
        <br />
        <Styled.DropDownBoxWrap>
          <Styled.DropDownBox>맛집탐방러 </Styled.DropDownBox>
          라면?
        </Styled.DropDownBoxWrap>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
`;

Styled.Container = styled.div`
  position: relative;
  top: 10%;

  text-align: left;

  font-size: 3.4vw;
  font-family: 'S-CoreDream-5';

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 42px;
  }
`;

Styled.DropDownBoxWrap = styled.div``;

Styled.DropDownBox = styled.span`
  color: #fca800;
`;
