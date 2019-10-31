import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import BackgroundImageBox from './Components/BackgroundImageBox';
import TextBox from './Components/TextBox';

export default function CotentMain() {
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.HeadBoxWrap>
          <Styled.HeadBox>
            <TextBox />
          </Styled.HeadBox>
          <BackgroundImageBox />
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
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

Styled.HeadBoxWrap = styled.div`
  display: table;
  height: 100vh;
`;

Styled.HeadBox = styled.div`
  display: table-cell;
  vertical-align: middle;
`;
