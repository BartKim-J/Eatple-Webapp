/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import urlConf from 'configure/urlConfig';

import ImgBtnPartner from '../Images/BtnViewMore.svg';
import ImgBtnMediumShadow from '../Images/BtnMediumShadow.svg';

export default function ButtonBox() {
  return (
    <Styled.Wrap>
      <Styled.Container type="button" className="btn-box">
        <Link to={urlConf.Homepage}>
          <div className="button-image">
            <img src={ImgBtnPartner} alt="Button" />
          </div>
          <div className="button-shadow">
            <img src={ImgBtnMediumShadow} alt="Button" />
          </div>
        </Link>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  margin-bottom: 0;
`;

Styled.Container = styled.button`
  position: relative;

  width: 12vw;
  max-width: 180px;
  height: calc(16vw * 0.33);
  min-height: 60px;

  img {
    width: 100%;
    height: 100%;
  }

  .button-image {
    position: absolute;
    top: 0px;
    left: 0px;

    transition: all 0.5s;
  }

  .button-image:hover {
    transform: translate(-0.4vw, -0.4vw) !important;
  }

  .button-shadow {
    position: absolute;
    top: 0px;
    left: 0px;

    z-index: -1;
  }
`;
