/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';

import { Stickyroll } from '@stickyroll/stickyroll';
import { Inner } from '@stickyroll/inner';

import ReponsiveView from 'components/utils/ResponsiveView';

import ContentsStyled from '../../Shared/Styled/ContentsStyled';

import CategorySelectBox from './Components/CategorySelectBox';
import ResultViewBox from './Components/ResultViewBox';

import MobileCategorySelectBox from './ComponentsMobile/CategorySelectBox';
import MobileResultViewBox from './ComponentsMobile/ResultViewBox';

function ContentBrowser() {
  const pageCount = 6;
  const factor = 1;
  const thorottle = 250;

  const anchorsName = '!/calculator';

  return (
    <ContentsStyled.Stickyroll>
      <Stickyroll pages={pageCount} factor={factor} throttle={thorottle} anchors={anchorsName}>
        {({ anchors, page, pageIndex, pages, progress }) => {
          return (
            <Inner className="stickyroll-inner">
              <CalculatorContentStyled.Section>
                <ContentsStyled.Container>
                  <CategorySelectBox />

                  <ResultViewBox
                    anchor={anchors}
                    page={page}
                    pageIndex={pageIndex}
                    progress={progress}
                    pages={pages}
                  />
                </ContentsStyled.Container>
              </CalculatorContentStyled.Section>
            </Inner>
          );
        }}
      </Stickyroll>
    </ContentsStyled.Stickyroll>
  );
}

function ContentMobile() {
  const pageCount = 6;
  const factor = 1;
  const thorottle = 250;

  const anchorsName = '!/calculator-mobile';

  return (
    <ContentsStyled.Stickyroll>
      <Stickyroll pages={pageCount} factor={factor} throttle={thorottle} anchors={anchorsName}>
        {({ anchors, page, pageIndex, pages, progress }) => {
          return (
            <Inner className="stickyroll-inner">
              <ContentsStyled.MobileSection>
                <ContentsStyled.MobileContainer>
                  <MobileCategorySelectBox />

                  <MobileResultViewBox
                    anchor={anchors}
                    page={page}
                    pageIndex={pageIndex}
                    progress={progress}
                    pages={pages}
                  />
                </ContentsStyled.MobileContainer>
              </ContentsStyled.MobileSection>
            </Inner>
          );
        }}
      </Stickyroll>
    </ContentsStyled.Stickyroll>
  );
}

export default function CotentCalculator() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}

const CalculatorContentStyled = {};

CalculatorContentStyled.Section = styled(ContentsStyled.Section)`
  @media (max-aspect-ratio: 1/1) {
    height: 100vh;
  }
`;
