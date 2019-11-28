import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'components/utils/ResponsiveView';

import mediaConf from 'configure/mediaConfig';

import TextBox from './Components/TextBox';
import MobileTextBox from './ComponentsMobile/TextBox';

function ContentBrowser() {
  return (
    <Styled.Section>
      <Styled.Container>
        <TextBox />
      </Styled.Container>
    </Styled.Section>
  );
}

function ContentMobile() {
  return (
    <StyledMobile.Section>
      <Styled.Container>
        <MobileTextBox />
      </Styled.Container>
    </StyledMobile.Section>
  );
}

export default function PP() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  min-height: 100vh;

  overflow: visible;
`;

Styled.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  min-height: 100vh;
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;
