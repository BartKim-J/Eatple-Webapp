/* eslint-disable react/jsx-boolean-value */
import React from 'react';

import styled from 'styled-components';
import { Stickyroll } from '@stickyroll/stickyroll';
import { Inner } from '@stickyroll/inner';

import mediaConf from 'configure/mediaConfig';

import BackgroundImgBox from './Components/BackgroundImgBox';
import CategorySelectBox from './Components/CategorySelectBox';
import ResultViewBox from './Components/ResultViewBox';


import MobileBackgroundImgBox from './ComponentsMobile/BackgroundImgBox';
import MobileCategorySelectBox from './ComponentsMobile/CategorySelectBox';
import MobileResultViewBox from './ComponentsMobile/ResultViewBox';

function Content() {
  const pageCount = 6;
  const factor = 1;
  const thorottle = 1;

  const anchorsName = '!/calculator';

  return (
    <Styled.Stickyroll>
      <Stickyroll pages={pageCount} factor={factor} throttle={thorottle} anchors={anchorsName}>
        {({ anchors, page, pageIndex, pages, progress }) => {
          return (
            <Styled.Section>
              <Styled.Container>
                <BackgroundImgBox />

                <Inner withPagers="right" className="stickyroll-inner">
                  <CategorySelectBox />

                  <ResultViewBox
                    anchor={anchors}
                    page={page}
                    pageIndex={pageIndex}
                    progress={progress}
                    pages={pages}
                  />
                </Inner>
              </Styled.Container>
            </Styled.Section>
          );
        }}
      </Stickyroll>
    </Styled.Stickyroll>
  );
}

function MobileContent() {
  const pageCount = 6;
  const factor = 1;
  const thorottle = 1;

  const anchorsName = '!/calculator';

  return (
    <StyledMobile.Stickyroll>
      <Stickyroll pages={pageCount} factor={factor} throttle={thorottle} anchors={anchorsName}>
        {({ anchors, page, pageIndex, pages, progress }) => {
          return (
            <StyledMobile.Section>
              <StyledMobile.Container>
                <MobileBackgroundImgBox />

                <Inner withPagers="right" className="stickyroll-inner">
                  <MobileCategorySelectBox />

                  <MobileResultViewBox
                    anchor={anchors}
                    page={page}
                    pageIndex={pageIndex}
                    progress={progress}
                    pages={pages}
                  />
                </Inner>
              </StyledMobile.Container>
            </StyledMobile.Section>
          );
        }}
      </Stickyroll>
    </StyledMobile.Stickyroll>
  );
}

export default function CotentCalculator() {
  return (
    <>
      <Content />
      <MobileContent />
    </>
  );
}

const Styled = {};

Styled.Stickyroll = styled.div`
  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
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

  .stickyroll-inner {
    background-color: unset;

    .stickyroll-pagers {
    }
  }
`;

const StyledMobile = {};

StyledMobile.Stickyroll = styled.div`
  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
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

  .stickyroll-inner {
    background-color: unset;

    .stickyroll-pagers {
    }
  }
`;
