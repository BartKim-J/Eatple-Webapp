import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ErrorResultBox from './Components/ErrorResultBox';
import MobileErrorResultBox from './ComponentsMobile/ErrorResultBox';

function DesktopError() {
  return (
    <Styled.Section>
      <Styled.Container>
        <ErrorResultBox />
      </Styled.Container>
    </Styled.Section>
  );
}

function MobileError() {
  return (
    <StyledMobile.Section>
      <StyledMobile.Container>
        <MobileErrorResultBox />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function Error() {
  return (
    <>
      <DesktopError />
      <MobileError />
    </>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: #f8f8fa;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  min-height: 100vh;

  background-color: #f8f8fa;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }
`;

StyledMobile.Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;
