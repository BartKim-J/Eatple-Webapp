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
      <Styled.Container type="button" className="btn-box" aria-label="View More Partner">
        <Link to={urlConf.Homepage} aria-label="View More Partner">
          <div className="button-image">
            <Styled.ImageBox src={ImgBtnPartner} />
          </div>
          <div className="button-shadow">
            <Styled.ImageBox src={ImgBtnMediumShadow} />
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
  height: calc(12vw * 0.33);
  max-height: 60px;

  .button-image {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    transition: all 0.5s;
  }

  .button-image:hover {
    transform: translate(-0.4vw, -0.4vw) !important;
  }

  .button-shadow {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    z-index: -1;
  }
`;

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  background-size: cover;
`;
