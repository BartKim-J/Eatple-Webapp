import React from 'react';

import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import CopyrightBox from './Components/CopyrightBox';
import InfoBox from './Components/InfoBox';
import SiteMap from './Components/SiteMap';
import SocialMap from './Components/SocialMap';
import Wordmark from './Components/Wordmark';

import IconInstagram from './Images/IcInstagram.svg';
import IconFacebook from './Images/IcFacebook.svg';
import IconYoutube from './Images/IcYoutube.svg';

const siteMap = [
  {
    label: '제휴 점포 리스트',
    link: '/',
  },
  {
    label: '이용약관',
    link: '/',
  },
  {
    label: '자주 묻는 질문',
    link: '/',
  },
  {
    label: '개인정보취급방침',
    link: '/',
  },
];

const socialMap = [
  {
    label: 'Facebook',
    icon: IconFacebook,
    link: 'https://www.facebook.com/',
  },
  {
    label: 'Youtube',
    icon: IconYoutube,
    link: 'https://www.youtube.com/',
  },
  {
    label: 'Instagram',
    icon: IconInstagram,
    link: 'https://www.instagram.com/',
  },
];

export default function Footer() {
  return (
    <Styled.Section>
      <Styled.Container>
        <Wordmark />
        <CopyrightBox />
        <InfoBox />
        <SiteMap mapArray={siteMap} />
        <SocialMap mapArray={socialMap} />
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.2);

  background-color: #1c1c1c;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};

  padding: 5% ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING} 3%
    ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};

  @media (max-aspect-ratio: 1/1) {
    height: calc(100vw * 0.3);
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
`;
