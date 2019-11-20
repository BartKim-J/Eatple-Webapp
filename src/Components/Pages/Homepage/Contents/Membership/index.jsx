/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import mediaConf from 'configure/mediaConfig';

import HeroImg from './Components/HeroImg';
import BackgroundBox from './Components/BackgroundBox';
import FloatBoxList from './Components/FloatBoxList';
// import FloatImageBox from './Components/FloatImageBox';
// import FloatText from './Components/FloatText';

import MobileBackgroundBox from './ComponentsMobile/BackgroundBox';
import MobileFloatBoxList from './ComponentsMobile/FloatBoxList';
import MobileFloatImageBox from './ComponentsMobile/FloatImageBox';
import MobileFloatText from './ComponentsMobile/FloatText';

function ContentBrowser({ scrollY }) {
  return (
    <Styled.Section>
      <BackgroundBox />
      <Styled.Container>
        <HeroImg />
        <FloatBoxList />
      </Styled.Container>
    </Styled.Section>
  );
}
ContentBrowser.propTypes = {
  scrollY: PropTypes.number,
};
ContentBrowser.defaultProps = {
  scrollY: 0,
};

function ContentMobile({ scrollY }) {
  return (
    <StyledMobile.Section>
      <MobileBackgroundBox />
      <MobileFloatImageBox />
      <StyledMobile.Container>
        <MobileFloatBoxList scrollY={scrollY} />
        <MobileFloatText />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}
ContentMobile.propTypes = {
  scrollY: PropTypes.number,
};
ContentMobile.defaultProps = {
  scrollY: 0,
};

export default function CotentMembership() {
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

  overflow: hidden;

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

  overflow-x: visible;

  margin: 0 auto;
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow-y: visible;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;
