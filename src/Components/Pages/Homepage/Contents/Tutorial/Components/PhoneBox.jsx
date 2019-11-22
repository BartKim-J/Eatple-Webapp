/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';

import ImgPhone from '../Images/ImgPhone.png';
import ImgScreen from '../Images/ImgScreen.png';

export default function PhoneBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <div className="animated-phone-box">
          <img src={ImgPhone} alt="Phone" draggable="false" />

          <Styled.ScreenBoxWrap>
            <Styled.ScreenBox>
              <img src={ImgScreen} alt="Screen" draggable="false" />
            </Styled.ScreenBox>
          </Styled.ScreenBoxWrap>
        </div>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};
Styled.PhoneScreenWidth = '24vw';

Styled.Wrap = styled.div`
  position: absolute;
  top: 10%;
  right: 23%;

  z-index: 100;
`;

Styled.Container = styled.div`
  .animated-phone-box {
    width: ${Styled.PhoneScreenWidth};
    max-width: 405px;

    cursor: -webkit-grab;

    img {
      width: 100%;
    }
  }
`;

Styled.ScreenBoxWrap = styled.div`
  position: absolute;
  top: 0;

  padding: calc(${Styled.PhoneScreenWidth} * 0.044);
  width: ${Styled.PhoneScreenWidth};
  max-width: 405px;

  text-align: center;
`;
Styled.ScreenBox = styled.div`
  position: relative;
  display: inline-block;

  width: calc(${Styled.PhoneScreenWidth} * 0.883146);
  max-width: 353px;
`;
