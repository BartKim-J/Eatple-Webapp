import React from 'react';
import styled from 'styled-components';

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
  bottom: 0;
  right: 0;
`;

Styled.FloatTextBox = styled.div`
  position: relative;
  right: 50%;

  margin-bottom: 26%;

  max-width: 495px;
  text-align: left;

  font-size: 2.4vw;
  font-family: 'S-CoreDream-5';
  line-height: 1.46;
  color: #222222;

  .highlight {
    color: #fca800;
  }
`;
