import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'components/utils/ResponsiveView';

import mediaConf from 'configure/mediaConfig';

import HeadBox from './Components/HeadBox';
import TextBox from './Components/TextBox';

import MobileHeadBox from './ComponentsMobile/HeadBox';
import MobileTextBox from './ComponentsMobile/TextBox';

function ContentBrowser() {
  return (
    <Styled.Section>
      <Styled.ContainerTop>
        <HeadBox />
      </Styled.ContainerTop>

      <Styled.ContainerBottom>
        <TextBox />
      </Styled.ContainerBottom>
    </Styled.Section>
  );
}

function ContentMobile() {
  return (
    <StyledMobile.Section>
      <Styled.ContainerTop>
        <MobileHeadBox />
      </Styled.ContainerTop>

      <Styled.ContainerBottom>
        <MobileTextBox />
      </Styled.ContainerBottom>
    </StyledMobile.Section>
  );
}

export default function FAQ() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;
`;

Styled.ContainerTop = styled.div`
  position: relative;

  width: 100%;
  height: 25%;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.ContainerBottom = styled.div`
  position: relative;

  width: 100%;
  height: 75%;

  background-color: #f8f8fa;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;
