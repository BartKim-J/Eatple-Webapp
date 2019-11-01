import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ImgWordmark from './Images/ImgWordmark.svg';

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

function Wordmark() {
  return (
    <div className="footer-wordmark-wrap">
      <div className="footer-wordmark">
        <img src={ImgWordmark} alt="wordmark" draggable="false" />
      </div>
    </div>
  );
}

function CopyrightBox() {
  return (
    <div className="footer-copyright-box-wrap">
      <div className="footer-copyright-box">
        hey@eatple.com
        <br />
        ©2019 Astera Inc. All rights reserved.
      </div>
    </div>
  );
}

function InfoBox() {
  return (
    <div className="footer-info-box-wrap">
      <div className="footer-info-box">
        (주)아스테라
        <br />
        사업자번호: 255-87-01463
        <br />
        통신판매업: 서울서초-2929
        <br />
        서울특별시 서초구 서초대로 398,플래티넘타워 6층(서초동)
        <br />
        대표전화 : 02-2135-1670
        <br />
      </div>
    </div>
  );
}
function SiteMap({ mapArray }) {
  return (
    <div className="footer-site-map-wrap">
      <ul className="footer-site-map">
        {mapArray.map(entrySite => {
          return (
            <li key={entrySite.label}>
              <Link to={entrySite.link} target="_blank" rel="noopener noreferrer">
                {entrySite.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
SiteMap.propTypes = {
  mapArray: PropTypes.array.isRequired,
};

function SocialMap({ mapArray }) {
  return (
    <div className="footer-social-map-wrap">
      <ul className="footer-social-map">
        {mapArray.map(entryIcon => {
          return (
            <li key={entryIcon.label}>
              <Link to={entryIcon.link} target="_blank" rel="noopener noreferrer">
                <img src={entryIcon.icon} alt={entryIcon.label} draggable="false" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
SocialMap.propTypes = {
  mapArray: PropTypes.array.isRequired,
};

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
  height: 300px;

  background-color: #1c1c1c;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  position: relative;

  height: 100%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;

  .footer-copyright-box-wrap {
    position: absolute;
    right: 0px;
    bottom: 34px;

    .footer-copyright-box {
      font-family: 'S-CoreDream-3';

      color: #ffffff;

      text-align: right;
      font-size: 0.72em;
      line-height: 1.54;
    }
  }

  .footer-info-box-wrap {
    position: absolute;
    left: 0px;
    bottom: 34px;

    .footer-info-box {
      font-family: 'S-CoreDream-3';

      color: #ffffff;

      text-align: left;
      font-size: 0.72em;
      line-height: 1.54;
    }
  }

  .footer-wordmark-wrap {
    position: absolute;

    top: 58px;
    left: 0px;

    .footer-wordmark {
      width: 86px;
    }
  }

  .footer-site-map-wrap {
    position: absolute;

    top: 58px;
    right: 15vw;

    .footer-site-map {
      width: 20vw;

      padding: 0;
      margin: 0;

      li {
        display: inline-block;
        width: 8vw;

        a {
          color: #ffffff;
        }

        font-family: 'S-CoreDream-5';

        font-weight: 500;
        line-height: 1.33;
        font-size: 0.8em;
      }

      li:nth-child(odd) {
        margin-right: 4vw;
      }
    }
  }

  .footer-social-map-wrap {
    position: absolute;

    top: 58px;
    right: 5vw;

    .footer-social-map {
      li {
        display: inline-block;
        width: 1.6em;

        margin-right: 15px;
      }

      li:last-child {
        margin-right: 0;
      }
    }
  }
`;
