import React from 'react';

import styled from 'styled-components';

import ContentMain from './Contents/Main';
import ContentMembership from './Contents/Membership';
import ContentTutorial from './Contents/Tutorial';
import ContentCalculator from './Contents/Caculator';
import ContentMenuSlide from './Contents/MenuSlide';
import ContentTale from './Contents/Tale';

export default function Homepage() {
  return (
    <Styled.Section>
      <Styled.Container>
        <ContentMain />
        <ContentMembership />
        <ContentCalculator />
        <ContentTutorial />
        <ContentMenuSlide />
        <ContentTale />
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};

Styled.Section = styled.section`
  max-width: 100%;

  text-align: center;
`;

Styled.Container = styled.div`
  position: relative;
`;
