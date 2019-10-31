/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Stickyroll } from '@stickyroll/stickyroll';
import { Pagers, Skip } from '@stickyroll/pagers';
import { Inner, Content } from '@stickyroll/inner';



const headlines = [
  'Hello World!',
  'Hello React!',
  'Hello Stickyroll!',
  "Let's continue with the next lesson!",
];

function CalculatorResultView({ pageIndex, progress }) {
  return (
    <div>
      {headlines[pageIndex]}
      <br />
      {progress}
    </div>
  );
}
CalculatorResultView.propTypes = {
  pageIndex: PropType.number.isRequired,
  progress: PropType.number.isRequired,
};

export default function CotentCalculator() {
  return (
    <Stickyroll pages={headlines} factor={2} throttle={250} anchors="!/headline">
      {({ pageIndex, progress }) => {
        return (
          <Styled.Section>
            <Styled.Container>
              <Inner withPagers="left">
                <Pagers useContext={true} />

                <CalculatorResultView pageIndex={pageIndex} progress={progress} />
                <div className="">
                  <Skip useContext={true} />
                </div>
              </Inner>
            </Styled.Container>
          </Styled.Section>
        );
      }}
    </Stickyroll>
  );
}
const Styled = {};

Styled.Section = styled.section`
  @media all and (min-width: $media-width-desktop-min) and (max-width: $media-width-desktop) {
    position: relative;

    width: 100vw;
    height: 718px;

    overflow-x: hidden;
  }
  @media all and (min-width: $media-width-tablet-min) and (max-width: $media-width-tablet) {
    .content-tale-section {
      display: none;
    }
  }

  @media all and (min-width: $media-width-mobile-min) and (max-width: $media-width-mobile) {
    .content-tale-section {
      display: none;
    }
  }
`;

Styled.Container = styled.div`
  position: relative;

  width: 100vw;
  height: 718px;

  overflow-x: hidden;

  @media all and (max-width: $media-width-desktop-content + 160px) {
    padding: 0vh $media-width-desktop-content-padding;
  }

  @media all and (min-width: $media-width-desktop-content + 160px) {
    padding: 0vh 0vw;
  }
`;
