import React from 'react';
import styled from 'styled-components';

import IconEatple from '../Images/ImgEatPlus.svg';

export default function FloatImageBox() {
  return (
    <Styled.FloatImageBoxWrap>
      <Styled.FloatImageBox>
        <img src={IconEatple} alt="eatple" draggable="false" />
      </Styled.FloatImageBox>
    </Styled.FloatImageBoxWrap>
  );
}

const Styled = {};

Styled.FloatImageBoxWrap = styled.div`
  position: absolute;
  top:  5%;
  right: 0%;

  width: 76%;
`;
Styled.FloatImageBox = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-width: 445px;
  }
`;
