import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



export default function PartnersMap() {
  const KakaoMapAPI = window.kakao.maps;
  const [draggable, setDraggable] = useState(false);
  const [zoomable, setZoomable] = useState(false);

  const partnerMakers = [
    new KakaoMapAPI.LatLng(37.497535461505684, 127.02948149502778),
    new KakaoMapAPI.LatLng(37.49671536281186, 127.03020491448352),
    new KakaoMapAPI.LatLng(37.496201943633714, 127.02959405469642),
    new KakaoMapAPI.LatLng(37.49640072567703, 127.02726459882308),
    new KakaoMapAPI.LatLng(37.49640098874988, 127.02609983175294),
    new KakaoMapAPI.LatLng(37.49932849491523, 127.02935780247945),
    new KakaoMapAPI.LatLng(37.49996818951873, 127.02943721562295)
  ];


  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let partnersMap = {};

    const container = document.getElementById('kakao-map');

    const options = {
      center: new KakaoMapAPI.LatLng(37.496815, 127.028574),
      level: 4,
    };

    partnersMap = new KakaoMapAPI.Map(container, options);

    partnersMap.setDraggable(draggable);
    partnersMap.setZoomable(zoomable);
  });

  return (
    <Styled.Wrap>
      <Styled.Container>
        <div id="kakao-map" className="map-container" />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
`;

Styled.Container = styled.div`
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
