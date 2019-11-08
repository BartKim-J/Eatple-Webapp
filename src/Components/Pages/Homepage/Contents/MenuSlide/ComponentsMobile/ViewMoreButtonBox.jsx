import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ImgBtnPartner from '../Images/BtnViewMore.svg';
import ImgBtnMediumShadow from '../Images/BtnMediumShadow.svg';

export default function ButtonBox() {
  return (
    <Styled.Wrap>
      <Link to="/">
        <Styled.Container type="button" className="btn-box">
          <div className="button-image">
            <img src={ImgBtnPartner} alt="Button" />
          </div>
          <div className="button-shadow">
            <img src={ImgBtnMediumShadow} alt="Button" />
          </div>
        </Styled.Container>
      </Link>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  padding: 8% 0%;
`;

Styled.Container = styled.button`
  position: relative;

  width: 34vw;
  max-width: 180px;
  height: calc(34vw * 0.33);
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
    transform: translate(-4.6%, -13%);
  }

  .button-shadow {
    position: absolute;
    top: 0px;
    left: 0px;

    z-index: -1;
  }
`;
