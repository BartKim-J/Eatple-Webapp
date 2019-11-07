import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import BackgroundImg from './Components/BackgroundImg';
import TextBox from './Components/TextBox';

import MobileBackgroundImg from './ComponentsMobile/BackgroundImg';
import MobileTextBox from './ComponentsMobile/TextBox';

function Content() {
  return (
    <Styled.Section>
      <BackgroundImg />
      <Styled.Container>
        <Styled.HeadBoxWrap>
          <Styled.HeadBox>
            <TextBox />
          </Styled.HeadBox>
        </Styled.HeadBoxWrap>
      </Styled.Container>
    </Styled.Section>
  );
}

function ContentMobile() {
  return (
    <StyledMobile.Section>
      <MobileBackgroundImg />
      <StyledMobile.Container>
        <StyledMobile.HeadBoxWrap>
          <StyledMobile.HeadBox>
            <MobileTextBox />
          </StyledMobile.HeadBox>
        </StyledMobile.HeadBoxWrap>
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function CotentMain() {
  return (
    <>
      <Content />
      <ContentMobile />
    </>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  @media (max-aspect-ratio: 1/1) {
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;

Styled.HeadBoxWrap = styled.div`
  display: table;

  width: 50%;
  height: 100%;
`;

Styled.HeadBox = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;

StyledMobile.HeadBoxWrap = styled.div`
  display: table;

  width: 100%;
  height: 50%;
`;

StyledMobile.HeadBox = styled.div`
  display: table-cell;
  vertical-align: middle;
`;
