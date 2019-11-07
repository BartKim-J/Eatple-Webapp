import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function FloatText() {
  return (
    <Styled.FloatTextBoxWrap>
      <Styled.FloatTextBox>
        월<span className="highlight">7,900원</span>
        의
        <br />
        멤버십 가입으로
        <br />
        평범했던 식사 시간을
        <br />
        새롭게 채워보세요!
      </Styled.FloatTextBox>
    </Styled.FloatTextBoxWrap>
  );
}

const Styled = {};

Styled.FloatTextBoxWrap = styled.div`
  position: absolute;
  top: 18%;
  left: 0;
`;

Styled.FloatTextBox = styled.div`
  max-width: 495px;
  text-align: left;

  font-size: 8vw;
  font-family: 'S-CoreDream-5';
  line-height: 1.46;
  color: #222222;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
    font-size: 24px;
  }

  .highlight {
    color: #fca800;
  }
`;
