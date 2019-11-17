import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ScrollAnimation from 'react-animate-on-scroll';

import ImgArrowDown from '../Images/IcArrowDown.svg';
import ImgArrowUp from '../Images/IcArrowUp.svg';

export default function CategorySelectBox() {
  let imgArrow = ImgArrowDown;
  const category = '맛집탐방러';

  imgArrow = ImgArrowUp;

  return (
    <Styled.Wrap>
      <Styled.Container>
        <ScrollAnimation animateIn="fadeInDown">
          당신이
          <br />
          <Styled.CategoryBoxWrap>
            <Styled.CategoryBox>
              <Styled.CategoryText>
                {category} <Styled.ArrowImg src={imgArrow} alt="Arrow" />
              </Styled.CategoryText>
              라면?
            </Styled.CategoryBox>
          </Styled.CategoryBoxWrap>
        </ScrollAnimation>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
`;

Styled.Container = styled.div`
  width: 120%;

  text-align: left;

  font-size: 3.4vw;
  font-family: 'S-CoreDream-Bold';
  line-height: 1.46;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 42px;
  }

  vertical-align: middle;
`;

Styled.CategoryBoxWrap = styled.div``;

Styled.CategoryBox = styled.div`
  text-align: left;

  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
`;

Styled.CategoryText = styled.span`
  color: #fca800;

  padding: 2% 0%;

  border-bottom: solid 0.2vw black;
`;

Styled.ArrowImg = styled.img`
  padding-right: 2%;

  width: 2.8vw;
  max-width: 48px;
`;
