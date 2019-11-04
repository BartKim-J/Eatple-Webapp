import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import mediaConf from 'configure/mediaConfig';

import TrialButtonBox from './TrialButtonBox';

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <span className="highlight">잇플</span>을 사용할 수록
        <br />
        <span className="highlight">채워지는 가치</span>를 직접 경험하세요
        <div className="sub-text">지금 잇플 플러스 친구 추가하면 멤버십 비용이 무료!</div>
        <TrialButtonBox />
        <div className="divider-line" />
        <div className="qna-text-box">
          아직 잇플에 대해 더 궁금하다면?
          <br />
          <Link to="/">
            <span className="qna-highlight">자주 묻는 질문</span>
          </Link>
          을 확인하세요!
        </div>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

Styled.Container = styled.div`
  position: relative;
  height: 100%;

  padding: 20% 0;

  text-align: left;

  font-family: 'S-CoreDream-5';
  font-size: calc(2.6vw * 0.8);
  line-height: 1.46;

  color: #1c1c1c;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 52px;
  }

  .highlight {
    color: #fca800;
  }

  .sub-text {
    margin-top: 16px;

    font-family: 'S-CoreDream-3';
    font-size: 1vw;
    line-height: 1.6;

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 18px;
    }
  }

  .divider-line {
    margin: 10% 0 5% 0;
    width: 100%;
    height: 1px;
    border: solid 1px #ececed;
  }

  .qna-text-box {
    font-family: 'S-CoreDream-3';
    font-size: 1vw;
    line-height: 1.44;

    .qna-highlight {
      font-family: 'S-CoreDream-6';
      text-decoration: underline;
    }

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 18px;
    }
  }
`;
