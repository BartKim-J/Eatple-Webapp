import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import TextBox from './Components/TextBox';
import MenuSlider from './Components/MenuSlider';
import PartnersMap from './Components/PartnersMap';

export default function CotentMenuSlider() {
  return (
    <Styled.Section>
      <Styled.Container>
        <TextBox />
        <MenuSlider />
        <PartnersMap />
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.8);

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  @media (max-aspect-ratio: 1/1) {
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;
