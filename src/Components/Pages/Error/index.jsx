import React from 'react';
import styled from 'styled-components';

import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import mediaConf from 'configure/mediaConfig';

import ErrorResultBox from './Components/ErrorResultBox';
import MobileErrorResultBox from './ComponentsMobile/ErrorResultBox';

function ContentBrowser() {
  return (
    <Styled.Section>
      <Styled.Container>
        <ErrorResultBox />
      </Styled.Container>
    </Styled.Section>
  );
}

function ContentMobile() {
  return (
    <StyledMobile.Section>
      <StyledMobile.Container>
        <MobileErrorResultBox />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function Error() {
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
          <ContentBrowser />
        </Orientation>

        <Orientation orientation="portrait" alwaysRender={false}>
          <ContentMobile />
        </Orientation>
      </DeviceOrientation>
    </MobileView>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: #f8f8fa;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  min-height: 100vh;

  background-color: #f8f8fa;
`;

StyledMobile.Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;
