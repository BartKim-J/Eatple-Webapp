import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function TextBox() {
  return (
    <Styled.TextBoxWrap>
      <Styled.TextBox>
        <div className="title">
          한끼 식사에
          <br />
          가치를 더하다,
          <span className="highlight"> 잇플</span>
          <div className="sub-text">
            잇플은 한끼 식사를 5500원에 해결할 수 있는 테이크아웃 멤버십입니다.
          </div>
        </div>
      </Styled.TextBox>
    </Styled.TextBoxWrap>
  );
}

const Styled = {};

Styled.TextBoxWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;

  text-align: left;
`;

Styled.TextBox = styled.div`
  display: inline-block;

  .title {
    text-align: left;
    font-family: 'S-CoreDream';
    font-size: 8vw;
    line-height: 1.33;

    @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
      font-size: 34px;
    }
  }

  .highlight {
    font-family: 'S-CoreDream-Bold';
  }

  .sub-text {
    margin-top: 23px;

    font-size: 4vw;

    @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
      font-size: 15px;
    }
  }
`;
