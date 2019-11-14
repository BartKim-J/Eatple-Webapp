import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import TextBox from './Components/TextBox';
import MenuSlider from './Components/MenuSlider';
import PartnersMap from './Components/PartnersMap';

import MobileTextBox from './ComponentsMobile/TextBox';
import MobileMenuSlider from './ComponentsMobile/MenuSlider';
import MobilePartnersMap from './ComponentsMobile/PartnersMap';

import partnersInfo from './partnersInfo';

function Content() {
  return (
    <Styled.Section>
      <Styled.Container>
        <TextBox />
        <MenuSlider partnersInfo={partnersInfo} />
        <PartnersMap partnersInfo={partnersInfo} />
      </Styled.Container>
    </Styled.Section>
  );
}

function ContentMobile() {
  return (
    <StyledMobile.Section>
      <MobilePartnersMap partnersInfo={partnersInfo} />
      <StyledMobile.Container>
        <MobileTextBox />
        <MobileMenuSlider partnersInfo={partnersInfo} />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function CotentMenuSlider() {
  return (
    <>
      <Content />
      <ContentMobile />
    </>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.8);

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 150vh;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }
`;

StyledMobile.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;
