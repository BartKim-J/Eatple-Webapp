import React from 'react';
import styled from 'styled-components';

import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import mediaConf from 'configure/mediaConfig';
import urlConf from 'configure/urlConfig';

import CopyrightBox from './Components/CopyrightBox';
import InfoBox from './Components/InfoBox';
import SiteMap from './Components/SiteMap';
import SocialMap from './Components/SocialMap';
import Wordmark from './Components/Wordmark';

import MobileCopyrightBox from './ComponentsMobile/CopyrightBox';
import MobileInfoBox from './ComponentsMobile/InfoBox';
import MobileSiteMap from './ComponentsMobile/SiteMap';
import MobileSocialMap from './ComponentsMobile/SocialMap';
import MobileWordmark from './ComponentsMobile/Wordmark';

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
    link: urlConf.TOS,
  },
  {
    label: '자주 묻는 질문',
    link: urlConf.FAQ,
  },
  {
    label: '개인정보취급방침',
    link: urlConf.PP,
  },
];

const socialMap = [
  {
    label: 'Facebook',
    icon: IconFacebook,
    link: urlConf.facebook,
  },
  {
    label: 'Youtube',
    icon: IconYoutube,
    link: urlConf.youtube,
  },
  {
    label: 'Instagram',
    icon: IconInstagram,
    link: urlConf.instagram,
  },
];

function ContentBrowser() {
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

function ContentMobile() {
  return (
    <MobileStyled.Section>
      <MobileStyled.Container>
        <MobileWordmark />
        <MobileCopyrightBox />
        <MobileInfoBox />
        <MobileSiteMap mapArray={siteMap} />
        <MobileSocialMap mapArray={socialMap} />
      </MobileStyled.Container>
    </MobileStyled.Section>
  );
}

export default function Footer() {
  if (isBrowser)
    return (
      <BrowserView>
        <ContentBrowser />
      </BrowserView>
    );

  return (
    <MobileView>
      <DeviceOrientation>
        <Orientation orientation="landscape" alwaysRender={false}>
          <ContentBrowser />
        </Orientation>

        <Orientation orientation="portrait" alwaysRender={false}>
          <ContentMobile />
        </Orientation>
      </DeviceOrientation>
    </MobileView>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.2);
  max-height: 420px;

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

const MobileStyled = {};

MobileStyled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 35vh;

  background-color: #1c1c1c;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};

  padding: 5% ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING} 3%
    ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
`;

MobileStyled.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
`;
