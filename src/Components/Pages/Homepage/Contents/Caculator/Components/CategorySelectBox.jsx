import React from 'react';
import styled from 'styled-components';

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
  top: 10vh;
  left: 0vw;
`;

Styled.Container = styled.div`
  text-align: left;

  font-size: 3.4em;
  font-family: 'S-CoreDream-5';
`;

Styled.DropDownBoxWrap = styled.div``;

Styled.DropDownBox = styled.span`
  color: #fca800;
`;
