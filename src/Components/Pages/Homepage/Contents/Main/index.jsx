import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import BackgroundImg from './Components/BackgroundImg';
import TextBox from './Components/TextBox';

export default function CotentMain() {
  return (
    <Styled.Section>
      <BackgroundImg />
      <Styled.Container>
        <Styled.HeadBoxWrap>
          <Styled.HeadBox>
            <TextBox />
          </Styled.HeadBox>
        </Styled.HeadBoxWrap>
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  @media (max-aspect-ratio: 1/1) {
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;

Styled.HeadBoxWrap = styled.div`
  display: table;

  width: 50%;
  height: 100%;
`;

Styled.HeadBox = styled.div`
  display: table-cell;
  vertical-align: middle;
`;
