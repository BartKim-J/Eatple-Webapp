/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

export default function PartnersMap({ partnersInfo }) {
  const KakaoMapAPI = window.kakao.maps;

  const [draggable, setDraggable] = useState(false);
  const [zoomable, setZoomable] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let partnersMap = {};

    const container = document.getElementById('kakao-map');
    const imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    const options = {
      center: new KakaoMapAPI.LatLng(37.496015, 127.029574),
      level: 4,
    };

    partnersMap = new KakaoMapAPI.Map(container, options);

    partnersMap.setDraggable(draggable);
    partnersMap.setZoomable(zoomable);

    for (let i = 0; i < partnersInfo.length; i += 1) {
      const imageSize = new KakaoMapAPI.Size(24, 35);

      const markerImage = new KakaoMapAPI.MarkerImage(imageSrc, imageSize);

      const marker = new KakaoMapAPI.Marker({
        map: partnersMap,
        position: partnersInfo[i].latlng,
        title: partnersInfo[i].storeName,
        image: markerImage,
      });
    }
  });

  return (
    <Styled.Wrap>
      <Styled.Container>
        <div id="kakao-map" className="map-container" />
      </Styled.Container>
    </Styled.Wrap>
  );
}
PartnersMap.propTypes = {
  partnersInfo: PropType.array.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
`;

Styled.Container = styled.div`
  position: relative;
  width: 38vw;
  max-width: 586px;

  height: calc(38vw * 1.0604);
  max-height: 680px;

  .map-container {
    width: 100%;
    height: 100%;
  }
`;
