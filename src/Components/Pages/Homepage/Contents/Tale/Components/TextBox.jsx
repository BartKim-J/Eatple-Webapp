import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import ImgBtnGetStarted from 'resource/Image/Button/BtnGetStarted.svg';
import ImgBtnMediumShadow from 'resource/Image/Button/BtnMediumShadow.svg';

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <span className="highlight">잇플</span>을 사용할 수록
        <br />
        <span className="highlight">채워지는 가치</span>를 직접 경험하세요
        <div className="sub-text">지금 잇플 플러스 친구 추가하면 멤버십 비용이 무료!</div>
        <div className="btn-box-wrap">
          <Link to="/">
            <button type="button" className="btn-box">
              <div className="button-image">
                <img src={ImgBtnGetStarted} alt="Button" />
              </div>
              <div className="button-shadow">
                <img src={ImgBtnMediumShadow} alt="Button" />
              </div>
            </button>
          </Link>
        </div>
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

  .highlight {
    color: #fca800;
  }

  .sub-text {
    margin-top: 16px;

    font-family: 'S-CoreDream-3';
    font-size: 1vw;
    line-height: 1.6;
  }

  .btn-box-wrap {
    padding-top: 10vh;
    margin-bottom: 0;

    .btn-box {
      position: relative;
      width: 150px;
      height: 60px;

      .button-image {
        position: absolute;
        top: 0px;
        left: 0px;

        transition: all 0.5s;
      }

      .button-image:hover {
        transform: translate(-5px, -5px);
      }

      .button-shadow {
        position: absolute;
        top: 0px;
        left: 0px;

        z-index: -1;
      }
    }
  }

  .divider-line {
    margin: 121px 0 34px 0;
    width: 100%;
    height: 1px;
    border: solid 1px #ececed;
  }

  .qna-text-box {
    font-family: 'S-CoreDream-3';
    font-size: 1.0vw;
    line-height: 1.44;

    .qna-highlight {
      font-family: 'S-CoreDream-6';
      text-decoration: underline;
    }
  }
`;
