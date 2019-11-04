/* eslint-disable react/jsx-boolean-value */
import React from 'react';

import styled from 'styled-components';
import { Stickyroll } from '@stickyroll/stickyroll';
import { Inner } from '@stickyroll/inner';

import mediaConf from 'configure/mediaConfig';

import BackgroundImgBox from './Components/BackgroundImgBox';
import CategorySelectBox from './Components/CategorySelectBox';

import ResultViewBox from './Components/ResultViewBox';

export default function CotentCalculator() {
  return (
    <Styled.Stickyroll>
      <Stickyroll pages={3} factor={2} throttle={250} anchors="!/calculator">
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

const Styled = {};

Styled.Stickyroll = styled.div`

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
