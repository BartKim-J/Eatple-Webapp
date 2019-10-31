import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ImgSlideMain from './Images/imgMenu@3x.png';
import ImgSlideSub1 from './Images/imgMenu@2x.png';

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
    <Styled.TextBoxWrap>
      <Styled.TextBox>
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
      </Styled.TextBox>
    </Styled.TextBoxWrap>
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
    <Styled.MenuSliderWrap>
      <Styled.MenuSlider>
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
      </Styled.MenuSlider>
    </Styled.MenuSliderWrap>
  );
}

function PartnersMap() {
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

export default function CotentMenuSlider() {
  return (
    <Styled.Section>
      <Styled.Container>
        <TextBox />
        <MenuSlider />
        <PartnersMap />
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  min-height: 80vw;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

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

Styled.TextBoxWrap = styled.div`
  position: absolute;
  top: 5vh;
  right: 15vw;
`;

Styled.TextBox = styled.div`
  text-align: left;

  margin-bottom: 10vh;

  font-family: 'S-CoreDream-5';
  font-size: 3.4em;
  line-height: 1.46;

  .highlight {
    color: #fca800;
  }

  .sub-text {
    margin: 0.8em 0 0 0.4em;
    font-size: 0.32em;
    line-height: 1.33;
  }

  .btn-box-wrap {
    padding-top: 10vh;
    margin-bottom: 0;

    .btn-box {
      position: relative;
      width: 150px;
      height: 60px;

      .button-image {
        position: absolute;
        top: 0px;
        left: 0px;

        transition: all 0.5s;
      }

      .button-image:hover {
        transform: translate(-5px, -5px);
      }

      .button-shadow {
        position: absolute;
        top: 0px;
        left: 0px;

        z-index: -1;
      }
    }
  }
`;

Styled.MenuSliderWrap = styled.div`
  position: absolute;
  top: 45vh;
  right: 4vw;
`;

Styled.MenuSlider = styled.div`
  position: relative;

  .content-menu-slide-main-box {
    position: relative;

    width: 60vw;
    max-width: 1074px;
    height: calc(60vw * 0.4692);
    max-height: 504px;
  }

  .content-menu-slide-sub-box {
    width: 60vw;
    max-width: 1074px;
    height: calc(60vw * 0.094);
    max-height: 100px;

    margin-top: 10px;

    .slider-info-box-wrap {
      position: absolute;
      bottom: 0;
      right: 0;

      .slider-info-box {
        position: relative;

        width: 20vw;
        max-width: 342px;
        height: calc(20vw * 0.4444);
        max-height: 152px;

        background-color: #1c1c1c;

        .slider-button-box-wrap {
          position: absolute;
          right: 0;
          top: -48px;

          .slider-button-box {
            display: inline-block;

            .slider-button {
              width: 48px;
              max-width: 48px;
            }
          }
        }

        .slider-text-box-wrap {
          position: relative;
          top: 0;
          left: 0;

          .slider-text-box {
            position: relative;

            color: #ffffff;

            .menu-info-text-box {
              position: absolute;
              top: 15px;
              left: 10%;

              text-align: left;

              .store-name {
                font-family: 'S-CoreDream-5';
                font-size: 0.8em;
                line-height: 1.67;
                letter-spacing: 1.09px;
                color: #fca800;

                margin-bottom: 5px;
              }

              .menu-name {
                font-family: 'S-CoreDream-5';
                font-size: 1.4em;

                line-height: 1.5;
                letter-spacing: -0.8px;
              }

              .store-address {
                margin-top: 15px;

                font-size: 0.8em;

                font-family: 'S-CoreDream-3';
                line-height: 2.17;
              }
            }
            .menu-index-text {
              position: absolute;
              top: 15px;
              right: 10%;

              font-size: 0.8em;
              line-height: 1.82;
            }
          }
        }
      }
    }

    .sub-box-item-list {
      height: calc(60vw * 0.094);
      max-height: 100px;

      overflow: hidden;

      .item-swiper {
        display: flex;
        overflow-x: visible;

        transition-property: transform;
        will-change: transform;

        transition: all 1s;

        .sub-box-item {
          position: relative;
          margin-right: 0.7%;

          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: 12.6%;

          height: calc(60vw * 0.094);
          max-height: 100px;

          transition: all 0.3s;
          opacity: 0.5;

          overflow: hidden;

          img {
            position: relative;
            left: 50%;
            transform: translate(-50%, 0);

            height: inherit;
            width: inherit;
          }
        }

        .sub-box-item:hover {
          opacity: 1;
        }

        .sub-box-item-selected {
          opacity: 1;
        }
      }
    }
  }
`;
