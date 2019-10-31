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
        서울특별시 서초구 서초동 서초대로 398 패스트파이브 강남 3호점 611호
        <br />
        ©2019 Astera Inc. All rights reserved.
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
  height: 240px;

  background-color: #1c1c1c;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  position: relative;

  height: 240px;

  max-width: $media-width-desktop-content;
  margin: 0 auto;

  .footer-copyright-box-wrap {
    position: absolute;
    left: 0px;
    bottom: 34px;

    .footer-copyright-box {
      font-family: 'S-CoreDream-3';

      color: #ffffff;

      text-align: left;
      font-size: 0.9em;
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
