/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import useScript from 'components/utils/useScript';

import ContentMain from './Contents/Main';
import ContentMembership from './Contents/Membership';
import ContentTutorial from './Contents/Tutorial';
import ContentCalculator from './Contents/Caculator';
import ContentMenuSlide from './Contents/MenuSlide';
import ContentTale from './Contents/Tale';

export default function Homepage() {
  const [loaded, error] = useScript(
    'https://dapi.kakao.com/v2/maps/sdk.js?appkey=2b7052dfc89e89644677cb1be76b7a18&autoload=false',
  );

  if (loaded) {
    return (
      <Styled.Section>
        <Styled.Container>
          <ContentMain />
          <ContentMembership />
          <ContentTutorial />
          <ContentMenuSlide />
          <ContentTale />
        </Styled.Container>
      </Styled.Section>
    );
  }
  return <></>;
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

Styled.Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
