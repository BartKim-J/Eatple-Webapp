import React, { useState } from 'react';
import styled from 'styled-components';

import ReponsiveView from 'components/utils/ResponsiveView';

import ContentsStyled from '../../Shared/Styled/ContentsStyled';

import TextBox from './Components/TextBox';
import MenuSlider from './Components/MenuSlider';
import PartnersMap from './Components/PartnersMap';

import MobileTextBox from './ComponentsMobile/TextBox';
import MobileMenuSlider from './ComponentsMobile/MenuSlider';
import MobilePartnersMap from './ComponentsMobile/PartnersMap';

import { partnersInfo } from './constants';

function ContentBrowser() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <MesuSlideContentStyled.Section>
      <ContentsStyled.Container>
        <TextBox />
        <MenuSlider
          partnersInfo={partnersInfo}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
        <PartnersMap partnersInfo={partnersInfo} slideIndex={slideIndex} />
      </ContentsStyled.Container>
    </MesuSlideContentStyled.Section>
  );
}

function ContentMobile() {
  return (
    <MesuSlideContentStyled.MobileSection>
      <MobilePartnersMap partnersInfo={partnersInfo} />
      <ContentsStyled.MobileContainer>
        <MobileTextBox />
        <MobileMenuSlider partnersInfo={partnersInfo} />
      </ContentsStyled.MobileContainer>
    </MesuSlideContentStyled.MobileSection>
  );
}

export default function CotentMenuSlider() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}

const MesuSlideContentStyled = {};

MesuSlideContentStyled.Section = styled(ContentsStyled.Section)`
  width: 100vw;
  height: calc(100vw * 0.7);
`;

MesuSlideContentStyled.MobileSection = styled(ContentsStyled.MobileSection)`
  width: 100vw;
  height: 150vh;
`;
