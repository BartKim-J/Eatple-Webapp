import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function PartnersMap() {
  const KakaoMapAPI = window.kakao.maps;

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let partnersMap = {};

    const container = document.getElementById('kakao-map-mobile');

    const options = {
      center: new KakaoMapAPI.LatLng(37.496815, 127.028574),
      level: 4,
    };

    partnersMap = new KakaoMapAPI.Map(container, options);
  });

  return (
    <Styled.Wrap>
      <Styled.Container>
        <div id="kakao-map-mobile" className="map-container" />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 5%;
  left: 0;

  width: 100%;
  height: 40%;
`;

Styled.Container = styled.div`
  position: relative;
  width: 100%;

  height: 100%;
  max-height: 680px;

  .map-container {
    width: 100%;
    height: 100%;
  }
`;
