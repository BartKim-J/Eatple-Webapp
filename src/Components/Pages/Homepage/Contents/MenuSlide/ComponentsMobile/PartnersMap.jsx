/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

export default function PartnersMap({ partnersInfo }) {
  const [draggable, setDraggable] = useState(false);
  const [zoomable, setZoomable] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let partnersMap = {};

    const container = document.getElementById('kakao-map-mobile');

    const options = {
      center: new window.kakao.maps.LatLng(37.496815, 127.029974),
      level: 5,
    };

    partnersMap = new window.kakao.maps.Map(container, options);

    partnersMap.setDraggable(draggable);
    partnersMap.setZoomable(zoomable);

    for (let i = 0; i < partnersInfo.length; i += 1) {
      const imageSize = new window.kakao.maps.Size(24, 35);

      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

      const marker = new window.kakao.maps.Marker({
        map: partnersMap,
        position: partnersInfo[i].latlng,
        title: partnersInfo[i].partner,
        image: markerImage,
      });
    }
  });

  return (
    <Styled.Wrap>
      <Styled.Container>
        <div id="kakao-map-mobile" className="map-container" />
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
  top: 5%;
  left: 0;

  width: 100%;
  height: 35%;
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
