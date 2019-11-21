import React from 'react';
import PropTypes from 'prop-types';

import ReponsiveView from 'components/utils/ResponsiveView';

import ContentsStyled from '../../Shared/Styled/ContentsStyled';

import HeroImg from './Components/HeroImg';
import BackgroundBox from './Components/BackgroundBox';
import FloatBoxList from './Components/FloatBoxList';

import MobileBackgroundBox from './ComponentsMobile/BackgroundBox';
import MobileFloatBoxList from './ComponentsMobile/FloatBoxList';
import MobileFloatImageBox from './ComponentsMobile/FloatImageBox';
import MobileFloatText from './ComponentsMobile/FloatText';

function ContentBrowser({ scrollY }) {
  return (
    <ContentsStyled.Section>
      <BackgroundBox />
      <ContentsStyled.Container>
        <HeroImg />
        <FloatBoxList />
      </ContentsStyled.Container>
    </ContentsStyled.Section>
  );
}
ContentBrowser.propTypes = {
  scrollY: PropTypes.number,
};
ContentBrowser.defaultProps = {
  scrollY: 0,
};

function ContentMobile({ scrollY }) {
  return (
    <ContentsStyled.MobileSection>
      <MobileBackgroundBox />
      <MobileFloatImageBox />
      <ContentsStyled.MobileContainer>
        <MobileFloatBoxList scrollY={scrollY} />
        <MobileFloatText />
      </ContentsStyled.MobileContainer>
    </ContentsStyled.MobileSection>
  );
}
ContentMobile.propTypes = {
  scrollY: PropTypes.number,
};
ContentMobile.defaultProps = {
  scrollY: 0,
};

export default function CotentMembership() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}
