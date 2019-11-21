import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

import ReponsiveView from 'components/utils/ResponsiveView';

import ContentsStyled from '../../Shared/Styled/ContentsStyled';

import TextBox from './Components/TextBox';
import BoxAnimationBox from './Components/BoxAnimationBox';

import MobileTextBox from './ComponentsMobile/TextBox';
import MobileBoxAnimationBox from './ComponentsMobile/BoxAnimationBox';

function ContentBrowser() {
  const calc = (x, y) => [x - window.innerWidth * 0.6, y - window.innerHeight * 0.5];

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { xy } = props;

  return (
    <TaleContentStyled.Section
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <BoxAnimationBox xy={xy} />
      <ContentsStyled.Container>
        <TextBox />
      </ContentsStyled.Container>
    </TaleContentStyled.Section>
  );
}
ContentBrowser.propTypes = {
  xy: PropTypes.array,
};
ContentBrowser.defaultProps = {
  xy: [0, 0],
};

function ContentMobile() {
  const calc = (x, y) => [x - window.innerWidth * 0.6, y - window.innerHeight * 0.5];

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { xy } = props;

  return (
    <TaleContentStyled.MobileSection
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <MobileBoxAnimationBox xy={xy} />
      <ContentsStyled.MobileContainer>
        <MobileTextBox />
      </ContentsStyled.MobileContainer>
    </TaleContentStyled.MobileSection>
  );
}
ContentMobile.propTypes = {
  xy: PropTypes.array,
};
ContentMobile.defaultProps = {
  xy: [0, 0],
};

export default function ContentTale() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}

const TaleContentStyled = {};

TaleContentStyled.Section = styled(ContentsStyled.Section)`
  width: 100vw;
  height: calc(100vw * 0.48);
`;

TaleContentStyled.MobileSection = styled(ContentsStyled.MobileSection)`
  width: 100vw;
  height: 60vh;
`;
