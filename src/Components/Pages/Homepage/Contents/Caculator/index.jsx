/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import { Stickyroll } from '@stickyroll/stickyroll';
import { Inner } from '@stickyroll/inner';

import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import mediaConf from 'configure/mediaConfig';

import BackgroundImgBox from './Components/BackgroundImgBox';
import CategorySelectBox from './Components/CategorySelectBox';
import ResultViewBox from './Components/ResultViewBox';

import MobileBackgroundImgBox from './ComponentsMobile/BackgroundImgBox';
import MobileCategorySelectBox from './ComponentsMobile/CategorySelectBox';
import MobileResultViewBox from './ComponentsMobile/ResultViewBox';

function ContentBrowser() {
  const pageCount = 6;
  const factor = 1;
  const thorottle = 250;

  const anchorsName = '!/calculator';

  return (
    <Styled.Stickyroll>
      <Stickyroll pages={pageCount} factor={factor} throttle={thorottle} anchors={anchorsName}>
        {({ anchors, page, pageIndex, pages, progress }) => {
          return (
            <Inner className="stickyroll-inner">
              <Styled.Section>
                <Styled.Container>
                  <BackgroundImgBox />

                  <CategorySelectBox />

                  <ResultViewBox
                    anchor={anchors}
                    page={page}
                    pageIndex={pageIndex}
                    progress={progress}
                    pages={pages}
                  />
                </Styled.Container>
              </Styled.Section>
            </Inner>
          );
        }}
      </Stickyroll>
    </Styled.Stickyroll>
  );
}

function ContentMobile() {
  const pageCount = 6;
  const factor = 1;
  const thorottle = 250;

  const anchorsName = '!/calculator-mobile';

  return (
    <StyledMobile.Stickyroll>
      <Stickyroll pages={pageCount} factor={factor} throttle={thorottle} anchors={anchorsName}>
        {({ anchors, page, pageIndex, pages, progress }) => {
          return (
            <Inner className="stickyroll-inner">
              <StyledMobile.Section>
                <StyledMobile.Container>
                  <MobileBackgroundImgBox />
                  <MobileCategorySelectBox />

                  <MobileResultViewBox
                    anchor={anchors}
                    page={page}
                    pageIndex={pageIndex}
                    progress={progress}
                    pages={pages}
                  />
                </StyledMobile.Container>
              </StyledMobile.Section>
            </Inner>
          );
        }}
      </Stickyroll>
    </StyledMobile.Stickyroll>
  );
}

export default function CotentCalculator() {
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
  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

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
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;

  height: 100%;
`;

const StyledMobile = {};

StyledMobile.Stickyroll = styled.div`
  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  .stickyroll-inner {
    padding: 0 !important;
    margin: 0;
    background-color: unset;
  }
`;

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
`;

StyledMobile.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;

  height: 100%;
`;
