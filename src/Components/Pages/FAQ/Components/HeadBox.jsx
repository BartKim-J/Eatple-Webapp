import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ImgFAQ from '../Images/FAQ.svg';

export default function HeadBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.HeadFAQImage src={ImgFAQ} alt="faq" />
        <Styled.TextBoxWrap>
          <Styled.TextBox>자주 묻는 <Styled.Highlight>질문</Styled.Highlight></Styled.TextBox>
        </Styled.TextBoxWrap>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: relative;

  width: 100%;
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;

Styled.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

Styled.TextBoxWrap = styled.div`
  position: absolute;
  left: 15%;
  bottom: 0;
`;

Styled.TextBox = styled.div`
  font-family: 'S-CoreDream-3';
  font-size: 4.4vw;
  line-height: 1.33;
  color: #222222;
`;

Styled.Highlight = styled.span`
  font-family: 'S-CoreDream-6';
  font-weight: bold;
`;

Styled.HeadFAQImage = styled.img`
  position: absolute;
  left: 0;
  bottom: -3%;

  width: 25%;
`;
