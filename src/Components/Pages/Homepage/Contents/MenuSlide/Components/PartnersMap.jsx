import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function PartnersMap() {
  const KakaoMapAPI = window.kakao.maps;

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let partnersMap = {};

    const container = document.getElementById('kakao-map');

    const options = {
      center: new KakaoMapAPI.LatLng(37.496815, 127.028574),
      level: 4,
    };

    partnersMap = new KakaoMapAPI.Map(container, options);
  });

  return (
    <Styled.PartnersMapWrap>
      <Styled.PartnersMap>
        <div id="kakao-map" className="map-container" />
      </Styled.PartnersMap>
    </Styled.PartnersMapWrap>
  );
}

const Styled = {};

Styled.PartnersMapWrap = styled.div`
  position: absolute;
  top: 5vh;
  left: 10vw;

  z-index: -1;
`;

Styled.PartnersMap = styled.div`
  position: relative;
  width: 32vw;
  max-width: 586px;

  height: calc(32vw * 1.1604);
  max-height: 680px;

  .map-container {
    width: 100%;
    height: 100%;
  }
`;
