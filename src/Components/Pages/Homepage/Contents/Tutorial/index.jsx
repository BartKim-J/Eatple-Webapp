import React, { useState } from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import BackgroundImg from './Components/BackgroundImg';
import PhoneBox from './Components/PhoneBox';
import TextBox from './Components/TextBox';
import TutorialBox from './Components/TutorialBox';

const categoryMap = [
  {
    category: '플친맺기',
    subText: '카카오 플친으로 편리하게 주문하세요.',
  },
  {
    category: '검색하기',
    subText: '카카오 플친으로 편리하게 검색하세요.',
  },
  {
    category: '예약하기',
    subText: '카카오 플친으로 편리하게 예약하세요.',
  },
  {
    category: '픽업하기',
    subText: '카카오 플친으로 편리하게 픽업하세요.',
  },
];

export default function ContentTutorial() {
  const [selected, setSelected] = useState(0);

  return (
    <Styled.Section>
      <BackgroundImg />
      <PhoneBox selected={selected} />
      <Styled.Container>
        <TextBox />
        <TutorialBox mapArray={categoryMap} selected={selected} selectHandler={setSelected} />
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};

Styled.Section = styled.div`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.7);

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  @media (max-aspect-ratio: 1/1) {
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;

  height: 100%;
`;
