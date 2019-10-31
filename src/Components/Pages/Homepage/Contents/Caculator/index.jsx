/* eslint-disable react/jsx-boolean-value */
import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { Stickyroll } from '@stickyroll/stickyroll';
import { Pagers } from '@stickyroll/pagers';
import { Inner, Content } from '@stickyroll/inner';
import {
  dark,
  indigo,
  yellow,
  deepOrange,
  teal,
  pink,
  blue,
  green,
  light,
  red,
  deepPurple,
  cyan,
  lime,
  purple,
  orange,
  amber,
} from '@stickyroll/themes';

import mediaConf from 'configure/mediaConfig';

import BackgroundImgBox from './Components/BackgroundImgBox';
import CategorySelectBox from './Components/CategorySelectBox';

import ResultViewBox from './Components/ResultViewBox';

const headlines = ['1', '2', '3', '4'];

export default function CotentCalculator() {
  return (
    <Stickyroll pages={6} factor={2} throttle={250} anchors="!/calculator">
      {({ anchors, page, pageIndex, pages, progress }) => {
        return (
          <Styled.Section>
            <BackgroundImgBox />
            <Styled.Container>
              <ThemeProvider theme={dark}>
                <Inner withPagers="right" className="stickyroll-inner">
                  <Pagers useContext={true} className="stickyroll-pagers" />

                  <CategorySelectBox />

                  <ResultViewBox
                    anchor={anchors}
                    page={page}
                    pageIndex={pageIndex}
                    progress={progress}
                    pages={pages}
                  />
                </Inner>
              </ThemeProvider>
            </Styled.Container>
          </Styled.Section>
        );
      }}
    </Stickyroll>
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
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;

  min-height: 100vh;

  .stickyroll-inner {
    background-color: unset;

    .stickyroll-pagers {
    }
  }
`;
