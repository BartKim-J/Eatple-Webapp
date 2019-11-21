import React, { useState } from 'react';
import styled from 'styled-components';

import ReponsiveView from 'components/utils/ResponsiveView';

import ContentsStyled from '../../Shared/Styled/ContentsStyled';

import BackgroundImg from './Components/BackgroundImg';
import PhoneBox from './Components/PhoneBox';
import TextBox from './Components/TextBox';
import TutorialBox from './Components/TutorialBox';

import MobilePhoneBox from './ComponentsMobile/PhoneBox';
import MobileTextBox from './ComponentsMobile/TextBox';
import MobileTutorialBox from './ComponentsMobile/TutorialBox';

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

function ContentBrowser() {
  const [selected, setSelected] = useState(0);

  return (
    <TutorialContentStyled.Section>
      <BackgroundImg />
      <PhoneBox selected={selected} />
      <ContentsStyled.Container>
        <TextBox />
        <TutorialBox mapArray={categoryMap} selected={selected} selectHandler={setSelected} />
      </ContentsStyled.Container>
    </TutorialContentStyled.Section>
  );
}

function ContentMobile() {
  const [selected, setSelected] = useState(0);

  return (
    <ContentsStyled.MobileSection>
      <MobilePhoneBox selected={selected} />
      <ContentsStyled.MobileContainer>
        <MobileTextBox />
        <MobileTutorialBox mapArray={categoryMap} selected={selected} selectHandler={setSelected} />
      </ContentsStyled.MobileContainer>
    </ContentsStyled.MobileSection>
  );
}

export default function ContentTutorial() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}

const TutorialContentStyled = {};

TutorialContentStyled.Section = styled(ContentsStyled.Section)`
  height: calc(100vw * 0.7);
`;
