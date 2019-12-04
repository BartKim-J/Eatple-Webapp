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
import ImgScreen1 from './Images/ImgScreen1.png';
import ImgScreen2 from './Images/ImgScreen2.png';
import ImgScreen3 from './Images/ImgScreen3.png';
import ImgScreen4 from './Images/ImgScreen4.png';

const categoryMap = [
  {
    category: '가입하기',
    subText: '잇플 카카오 채널을 추가하고 서비스에 가입해주세요.',
    image: ImgScreen1,
  },
  {
    category: '예약하기',
    subText: '주변 식당의 테이크아웃 메뉴를 선택하고 픽업할 시간을 예약하세요.',
    image: ImgScreen2,
  },
  {
    category: '결제하기',
    subText: '선택된 메뉴를 결제하고 잇플패스를 발급 받으세요.',
    image: ImgScreen3,
  },
  {
    category: '픽업하기',
    subText: '예약한 시간에 맞춰 미리 준비된 테이크아웃 음식을 식당에서 픽업해주세요.',
    image: ImgScreen4,
  },
];

function ContentBrowser() {
  const [selected, setSelected] = useState(0);

  return (
    <TutorialContentStyled.Section>
      <BackgroundImg />
      <PhoneBox mapArray={categoryMap} selected={selected} />
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
      <MobilePhoneBox mapArray={categoryMap} selected={selected} />
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
