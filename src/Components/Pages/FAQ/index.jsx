import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import HeadBox from './Components/HeadBox';
import TextBox from './Components/TextBox';

function DesktopFAQ() {
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

function MobileFAQ() {
  return (
    <StyledMobile.Section>
      <StyledMobile.Container>
        <HeadBox />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function FAQ() {
  return (
    <>
      <DesktopFAQ />
      <MobileFAQ />
    </>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }
`;

Styled.ContainerTop = styled.div`
  position: relative;

  width: 100%;
  height: 35%;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.ContainerBottom = styled.div`
  position: relative;

  width: 100%;
  height: 65%;

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

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;
