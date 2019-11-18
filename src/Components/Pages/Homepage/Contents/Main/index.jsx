import React from 'react';
import styled from 'styled-components';

import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import mediaConf from 'configure/mediaConfig';

import BackgroundImg from './Components/BackgroundImg';
import TextBox from './Components/TextBox';

import MobileBackgroundImg from './ComponentsMobile/BackgroundImg';
import MobileTextBox from './ComponentsMobile/TextBox';

function ContentBrowser() {
  return (
    <Styled.Section>
      <Styled.Container>
        <BackgroundImg />
        <TextBox />
      </Styled.Container>
    </Styled.Section>
  );
}

function ContentMobile() {
  return (
    <StyledMobile.Section>
      <MobileBackgroundImg />
      <StyledMobile.Container>
        <MobileTextBox />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function CotentMain() {
  if (isBrowser)
    return (
      <BrowserView>
        <ContentBrowser />
      </BrowserView>
    );

  return (
    <MobileView>
      <DeviceOrientation>
        <Orientation orientation="landscape" alwaysRender={false}>
          <ContentBrowser />;
        </Orientation>

        <Orientation orientation="portrait" alwaysRender={false}>
          <ContentMobile />
        </Orientation>
      </DeviceOrientation>
    </MobileView>
  );
}

const Styled = {};

Styled.Stickyroll = styled.div`
  .stickyroll-inner {
    padding: 0 !important;
    margin: 0;
    background-color: unset;
  }
`;

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

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

  z-index: 101;
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;
