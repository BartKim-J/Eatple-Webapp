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
  min-height: 80vw;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;
