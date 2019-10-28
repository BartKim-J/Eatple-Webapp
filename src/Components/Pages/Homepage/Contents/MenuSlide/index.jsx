import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import ImgSlideMain from './Images/imgMenu@3x.png';
import ImgSlideSub1 from './Images/ImgMenuSub1@3x.png';

import ImgBtnPartner from './Images/BtnViewMore.svg';
import ImgBtnMediumShadow from './Images/BtnMediumShadow.svg';

import ImgBtnSlideLeft from './Images/BtnLeft.svg';
import ImgBtnSlideRight from './Images/BtnRight.svg';

function TextBox() {
  return (
    <div className="content-menu-slide-text-box-wrap">
      <div className="content-menu-slide-text-box">
        <div className="title">
          잇플의 1차 서비스 지역은
          <br />
          <span className="highlight">강남 / 역삼</span> 부근입니다
          <div className="btn-box-wrap">
            <Link to="/">
              <button type="button" className="btn-box">
                <div className="button-image">
                  <img src={ImgBtnPartner} alt="Button" />
                </div>
                <div className="button-shadow">
                  <img src={ImgBtnMediumShadow} alt="Button" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const slideItemList = [
  {
    storeName: '유부남',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
  },
  {
    storeName: '카레 천국',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
  },
  {
    storeName: '카레 천국2',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
  },
  {
    storeName: '카레 천국3',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
  },
  {
    storeName: '카레 천국4',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
  },
  {
    storeName: '카레 천국5',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
  },
  {
    storeName: '카레 천국6',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
  },
];

function MenuSlider() {
  // let storeName = '유부남';
  // let storeAddress = '주소주소주소주소';
  // let menuName = '유부초밥 & 셀러드';

  const [slideIndex, setSlideIndex] = useState(0);
  const [movement, setMovement] = useState(0);
  const [lastTouch, setLastTouch] = useState(0);

  function handleMovement(delta) {
    const maxLength = slideItemList.length - 1;
    let nextMovement = movement + delta;

    if (nextMovement < 0) {
      nextMovement = 0;
    }

    if (nextMovement > maxLength * 134) {
      nextMovement = maxLength * 134;
    }

    setMovement(nextMovement);
  }

  function handleMovementEnd() {
    const endPosition = movement / 134;
    const endPartial = endPosition % 1;
    const endingIndex = endPosition - endPartial;
    const deltaInteger = endingIndex - slideIndex;

    const nextIndex = endingIndex;
  }

  
  function handleDragStart(e) {
    setLastTouch(e.nativeEvent.clientX);
    console.log('Touch Start');
  }

  function handleDragMove(e) {
    console.log(e.nativeEvent);
    const delta = lastTouch - e.nativeEvent.clientX;
    setLastTouch(e.nativeEvent.clientX);

    handleMovement(delta);

    console.log('Touching...');
  }

  function handleDragEnd() {
    handleMovementEnd();
    setLastTouch(0);

    console.log('Touch End');
  }

  function handleTouchStart(e) {
    setLastTouch(e.nativeEvent.touches[0].clientX);
    console.log('Touch Start');
  }

  function handleTouchMove(e) {
    console.log(e.nativeEvent);
    const delta = lastTouch - e.nativeEvent.touches[0].clientX;
    setLastTouch(e.nativeEvent.touches[0].clientX);

    handleMovement(delta);

    console.log('Touching...');
  }

  function handleTouchEnd() {
    handleMovementEnd();
    setLastTouch(0);

    console.log('Touch End');
  }

  function handleWheel(e) {
    console.log('Wheel...');
    handleMovement(e.deltaX);
  }

  function prevSlide() {
    let nextSlideIndex = slideIndex - 1;

    if (nextSlideIndex < 0) {
      nextSlideIndex = slideItemList.length - 1;
    }

    setSlideIndex(nextSlideIndex);
  }

  function nextSlide() {
    let nextSlideIndex = slideIndex + 1;
    if (slideIndex >= slideItemList.length) {
      nextSlideIndex = 0;
    }
    setSlideIndex(nextSlideIndex);
  }

  return (
    <div className="content-menu-slide-slider-wrap">
      <div className="content-menu-slide-slider">
        <div className="content-menu-slide-main-box">
          <img src={ImgSlideMain} alt="Button" draggable="false" />
        </div>

        <div className="content-menu-slide-sub-box">
          <div className="sub-box-item-list">
            <div
              role="button"
              className="swiper"
              style={{
                transform: `translateX(${movement * -1}px)`,
              }}
              onWheel={handleWheel}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              
              tabIndex={0}
            >
              <ul>
                {slideItemList.map((slideItem, index) => {
                  let className = 'sub-box-item';

                  if (index === slideIndex) {
                    className += 'selected-slide';
                  }
                  return (
                    <li key={slideItem.storeName}>
                      <button
                        type="button"
                        className={className}
                        onClick={() => {
                          setSlideIndex(index);
                        }}
                      >
                        <img src={ImgSlideSub1} alt="Sub" draggable="false" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="slider-info-box-wrap">
            <div className="slider-info-box">
              <div className="slider-button-box-wrap">
                <div className="slider-button-box">
                  <button type="button" className="slider-button" onClick={prevSlide}>
                    <img src={ImgBtnSlideLeft} alt="Button" draggable="false" />
                  </button>

                  <button type="button" className="slider-button" onClick={nextSlide}>
                    <img src={ImgBtnSlideRight} alt="Button" draggable="false" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EatplusMap() {
  const KakaoMapAPI = window.kakao.maps;
  let partnerMap = {};

  useEffect(() => {
    const container = document.getElementById('kakao-map');

    const options = {
      center: new KakaoMapAPI.LatLng(37.496815, 127.028574),
      level: 4,
    };

    partnerMap = new KakaoMapAPI.Map(container, options);
  });

  return (
    <div className="content-menu-slide-map-wrap">
      <div className="content-menu-slide-map">
        <div key={partnerMap} id="kakao-map" className="map-container" />
      </div>
    </div>
  );
}

export default function CotentMenuSlider() {
  return (
    <div className="content-menu-slide-section">
      <div className="content-menu-slide-inner">
        <TextBox />
        <MenuSlider />
        <div id="partner" />
        <EatplusMap />
      </div>
    </div>
  );
}
