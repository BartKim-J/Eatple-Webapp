import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import ImgWordmark from './Images/ImgWordmark@3x.png';

import IconInstagram from './Images/IcInstagram@3x.png';
import IconFacebook from './Images/IcFacebook@3x.png';
import IconYoutube from './Images/IcYoutube@3x.png';

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
              <a href={entrySite.link} target="_blank" rel="noopener noreferrer">
                {entrySite.label}
              </a>
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
              <a href={entryIcon.link} target="_blank" rel="noopener noreferrer">
                <img src={entryIcon.icon} alt={entryIcon.label} draggable="false" />
              </a>
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
    <div className="footer-section">
      <div className="footer-inner">
        <Wordmark />
        <CopyrightBox />
        <SiteMap mapArray={siteMap} />
        <SocialMap mapArray={socialMap} />
      </div>
    </div>
  );
}
