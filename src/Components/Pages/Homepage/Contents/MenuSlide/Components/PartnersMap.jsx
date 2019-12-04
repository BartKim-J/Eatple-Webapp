/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

function kakaoMap(partnersInfo, draggable, zoomable, mapFlag, setMapFlag, setMapInstance) {
  let partnersMap = {};

  if (mapFlag === false) {
    window.kakao.maps.load(() => {
      const container = document.getElementById('kakao-map');
      const imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

      const options = {
        center: new window.kakao.maps.LatLng(37.496015, 127.029574),
        level: 4,
      };

      partnersMap = new window.kakao.maps.Map(container, options);

      partnersMap.setDraggable(draggable);
      partnersMap.setZoomable(zoomable);

      for (let i = 0; i < partnersInfo.length; i += 1) {
        const imageSize = new window.kakao.maps.Size(24, 35);

        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

        const marker = new window.kakao.maps.Marker({
          map: partnersMap,
          position: new window.kakao.maps.LatLng(
            partnersInfo[i].latlng.x,
            partnersInfo[i].latlng.y,
          ),
          title: partnersInfo[i].storeName,
          image: markerImage,
        });
      }

      setMapInstance(partnersMap);
      setMapFlag(true);

      return partnersMap;
    });
  }
}

export default function PartnersMap({ partnersInfo, slideIndex }) {
  const [draggable, setDraggable] = useState(false);
  const [zoomable, setZoomable] = useState(false);
  const [mapInstance, setMapInstance] = useState(undefined);
  const [mapFlag, setMapFlag] = useState(false);

  useEffect(() => {
    kakaoMap(partnersInfo, draggable, zoomable, mapFlag, setMapFlag, setMapInstance);

    if (mapInstance !== undefined) {
      window.kakao.maps.load(() => {
        mapInstance.panTo(
          new window.kakao.maps.LatLng(
            partnersInfo[slideIndex].latlng.x,
            partnersInfo[slideIndex].latlng.y,
          ),
        );
      });
    }
  }, [setMapFlag, draggable, partnersInfo, zoomable, mapFlag, slideIndex, mapInstance]);

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
  slideIndex: PropType.number.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
`;

Styled.Container = styled.div`
  position: relative;

  width: 35vw;
  max-width: 586px;

  height: calc(38vw * 1.0604);
  max-height: 680px;

  .map-container {
    width: 100%;
    height: 100%;

    border-radius: 0.6vw;
  }
`;
