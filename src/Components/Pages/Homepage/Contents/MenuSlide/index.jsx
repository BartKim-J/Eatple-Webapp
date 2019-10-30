import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import ImgSlideMain from './Images/imgMenu@3x.png';
import ImgSlideSub1 from './Images/ImgMenuSub1@3x.png';

import ImgBtnPartner from './Images/BtnViewMore.svg';
import ImgBtnMediumShadow from './Images/BtnMediumShadow.svg';

import ImgBtnSlideLeft from './Images/BtnLeft.svg';
import ImgBtnSlideRight from './Images/BtnRight.svg';

const slideItemList = [
  {
    storeName: '유부남',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국2',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국3',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국4',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국5',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국6',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국7',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국8',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국9',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
  {
    storeName: '카레 천국10',
    storeAddress: '주소',
    menuName: '유부초밥 & 샐러드',
    mainImage: ImgSlideMain,
    subImage: ImgSlideSub1,
  },
];

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

function MenuSlider() {
  const minImageCount = 5;

  const [slideIndex, setSlideIndex] = useState(0);
  const [movement, setMovement] = useState(0);

  function transitionTo(pos) {
    if (pos <= slideItemList.length - minImageCount) {
      setMovement(pos);
    } else {
      setMovement(slideItemList.length - minImageCount);
    }

    setSlideIndex(pos);
  }

  function prevSlide() {
    let nextSlideIndex = slideIndex - 1;

    if (nextSlideIndex < 0) {
      nextSlideIndex = slideItemList.length - 1;
    }

    transitionTo(nextSlideIndex);
  }

  function nextSlide() {
    let nextSlideIndex = slideIndex + 1;

    if (slideIndex >= slideItemList.length - 1) {
      nextSlideIndex = 0;
    }

    transitionTo(nextSlideIndex);
  }

  return (
    <div className="content-menu-slide-slider-wrap">
      <div className="content-menu-slide-slider">
        <div className="content-menu-slide-main-box">
          <img src={slideItemList[slideIndex].mainImage} alt="Button" draggable="false" />
        </div>

        <div className="content-menu-slide-sub-box">
          <div className="sub-box-item-list">
            <div
              role="button"
              className="item-swiper"
              style={{
                transform: `translateX(${13.3 * movement * -1}%)`,
                width: `${slideItemList.length} * 15%`,
              }}
              tabIndex={0}
            >
              {slideItemList.map((slideItem, index) => {
                let className = 'sub-box-item';

                if (index === slideIndex) {
                  className += ' sub-box-item-selected';
                }

                return (
                  <button
                    type="button"
                    key={slideItem.storeName}
                    className={className}
                    onClick={() => {
                      transitionTo(index);
                    }}
                  >
                    <img src={slideItem.subImage} alt="Sub" draggable="false" />
                  </button>
                );
              })}
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

              <div className="slider-text-box-wrap">
                <div className="slider-text-box">
                  <div className="menu-info-text-box">
                    <div className="store-name">{slideItemList[slideIndex].storeName}</div>
                    <div className="menu-name">{slideItemList[slideIndex].menuName}</div>
                    <div className="store-address">{slideItemList[slideIndex].storeAddress}</div>
                  </div>
                  <div className="menu-index-text">
                    {`${slideIndex + 1}/${slideItemList.length}`}
                  </div>
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
