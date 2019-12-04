import React from 'react';

import ReponsiveView from 'components/utils/ResponsiveView';

import ContentsStyled from '../../Shared/Styled/ContentsStyled';

import HeroImg from './Components/HeroImg';
import TextBox from './Components/TextBox';

import MobileHeroImg from './ComponentsMobile/HeroImg';
import MobileTextBox from './ComponentsMobile/TextBox';

function ContentBrowser() {
  return (
    <ContentsStyled.Section>
      <HeroImg />
      <ContentsStyled.Container>
        <TextBox />
      </ContentsStyled.Container>
    </ContentsStyled.Section>
  );
}

function ContentMobile() {
  return (
    <ContentsStyled.MobileSection>
      <MobileHeroImg />
      <ContentsStyled.MobileContainer>
        <MobileTextBox />
      </ContentsStyled.MobileContainer>
    </ContentsStyled.MobileSection>
  );
}

export default function CotentMain() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}
