import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ButtonBox from './ViewMoreButtonBox';

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <div className="title">
          잇플의 1차 서비스 지역은
          <br />
          <span className="highlight">강남 / 역삼</span> 부근입니다
          <ButtonBox />
        </div>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 10%;
  left: 45%;
`;

Styled.Container = styled.div`
  text-align: left;
  margin-bottom: 5%;

  font-family: 'S-CoreDream-5';
  font-size: 3vw;
  line-height: 1.46;
  color: #222222;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 52px;
  }

  .highlight {
    color: #fca800;
  }

  .sub-text {
    margin: 0.8em 0 0 0.4em;
    font-size: 0.32em;
    line-height: 1.33;
  }
`;
