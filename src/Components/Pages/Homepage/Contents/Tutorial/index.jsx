import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import mediaConf from 'configure/mediaConfig';

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

function ContentBrowser({ selected, setSelected }) {
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
ContentBrowser.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
};

function ContentMobile({ selected, setSelected }) {
  return (
    <StyledMobile.Section>
      <MobilePhoneBox selected={selected} />
      <StyledMobile.Container>
        <MobileTextBox />
        <MobileTutorialBox mapArray={categoryMap} selected={selected} selectHandler={setSelected} />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}
ContentMobile.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default function ContentTutorial() {
  const [selected, setSelected] = useState(0);

  if (isBrowser)
    return (
      <BrowserView>
        <ContentBrowser selected={selected} setSelected={setSelected} />
      </BrowserView>
    );

  return (
    <MobileView>
      <DeviceOrientation>
        <Orientation orientation="landscape" alwaysRender={false}>
          <ContentBrowser selected={selected} setSelected={setSelected} />
        </Orientation>

        <Orientation orientation="portrait" alwaysRender={false}>
          <ContentMobile selected={selected} setSelected={setSelected} />
        </Orientation>
      </DeviceOrientation>
    </MobileView>
  );
}

const Styled = {};

Styled.Section = styled.div`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.7);
  max-height: ${mediaConf.MEDIA_HEIGHT_DESKTOP_CONTENT};

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

const StyledMobile = {};

StyledMobile.Section = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;
