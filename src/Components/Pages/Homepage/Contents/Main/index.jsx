import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import mediaConf from 'configure/mediaConfig';

import ImgBtnGetStarted from 'resource/Image/Button/BtnGetStarted.svg';
import ImgBtnMediumShadow from 'resource/Image/Button/BtnMediumShadow.svg';
import ImgHero from './Images/ImgHero.png';

function TrialButtonBox() {
  return (
    <Styled.TrialButtonBoxWrap>
      <Link to="/">
        <button type="button" className="button-box">
          <div className="button-image">
            <img src={ImgBtnGetStarted} alt="Button" />
          </div>
          <div className="button-shadow">
            <img src={ImgBtnMediumShadow} alt="Button" />
          </div>
        </button>
      </Link>
    </Styled.TrialButtonBoxWrap>
  );
}

function TextBox() {
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
        <TrialButtonBox />
      </Styled.TextBox>
    </Styled.TextBoxWrap>
  );
}

function HeadImage() {
  return (
    <Styled.HeadImageBoxWrap>
      <Styled.HeadImageBox>
        <img src={ImgHero} alt="slide-1" />
      </Styled.HeadImageBox>
    </Styled.HeadImageBoxWrap>
  );
}

export default function CotentMain() {
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.HeadBoxWrap>
          <Styled.HeadBox>
            <TextBox />
          </Styled.HeadBox>
        </Styled.HeadBoxWrap>
        <HeadImage />
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

Styled.HeadBoxWrap = styled.div`
  display: table;
  height: 100vh;
`;

Styled.HeadBox = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

Styled.HeadImageBoxWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 100;
`;

Styled.HeadImageBox = styled.div`
  overflow: hidden;
  max-width: 50vw;

  img {
    height: 100vh;
  }
`;

Styled.TextBoxWrap = styled.div`
  position: relative;
`;

Styled.TextBox = styled.div`
  text-align: left;
  font-family: 'S-CoreDream-3';
  font-size: 4em;
  line-height: 1.33;

  .title {
  }

  .highlight {
    font-family: 'S-CoreDream-6';
  }

  .sub-text {
    font-size: 0.3em;
  }
`;

Styled.TrialButtonBoxWrap = styled.div`
  padding-top: 10vh;
  margin-bottom: 0;

  .button-box {
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
`;
