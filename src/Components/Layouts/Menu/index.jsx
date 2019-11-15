import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import MenuBar from './Components/MenuBar';
import MobileMenuBar from './ComponentsMobile/MenuBar';

function DesktopMenu() {
  return (
    <Styled.Section>
      <Styled.Container>
        <MenuBar />
      </Styled.Container>
    </Styled.Section>
  );
}

function MobileMenu() {
  return (
    <StyledMobile.Section>
      <StyledMobile.Container>
        <MobileMenuBar />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function Menu() {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 50px;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

Styled.Container = styled.div`
  position: relative;
  top: 50%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;

  img {
    width: 100%;
  }
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 8vh;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  padding: 4% 0;

  img {
    width: 100%;
  }
`;
