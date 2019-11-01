import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import ImgSlideMain from '../Images/imgMenu@3x.png';
import ImgSlideSub1 from '../Images/imgMenu@2x.png';

import ImgBtnSlideLeft from '../Images/BtnLeft.svg';
import ImgBtnSlideRight from '../Images/BtnRight.svg';

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

function MenuInfoBox({ prevSlide, nextSlide, slideIndex }) {
  return (
    <Styled.MenuInfoBoxWrap>
      <Styled.MenuInfoBox>
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
            <div className="menu-index-text">{`${slideIndex + 1}/${slideItemList.length}`}</div>
          </div>
        </div>
      </Styled.MenuInfoBox>
    </Styled.MenuInfoBoxWrap>
  );
}
MenuInfoBox.propTypes = {
  slideIndex: PropType.number.isRequired,
  prevSlide: PropType.func.isRequired,
  nextSlide: PropType.func.isRequired,
};

function MainImageSlideBox({ slideIndex }) {
  return (
    <Styled.MainImageSlideBox>
      <img src={slideItemList[slideIndex].mainImage} alt="Button" draggable="false" />
    </Styled.MainImageSlideBox>
  );
}
MainImageSlideBox.propTypes = {
  slideIndex: PropType.number.isRequired,
};

function SubImageSlideBox({ slideIndex, movement, transitionTo, prevSlide, nextSlide }) {
  return (
    <Styled.SubImageSlideBox>
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
      <MenuInfoBox slideIndex={slideIndex} nextSlide={nextSlide} prevSlide={prevSlide} />
    </Styled.SubImageSlideBox>
  );
}
SubImageSlideBox.propTypes = {
  slideIndex: PropType.number.isRequired,
  movement: PropType.number.isRequired,
  transitionTo: PropType.func.isRequired,
  prevSlide: PropType.func.isRequired,
  nextSlide: PropType.func.isRequired,
};

export default function MenuSlider() {
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

  useEffect(() => {
    const autoSlideMover = setInterval(() => {
      let nextSlideIndex = slideIndex + 1;

      if (slideIndex >= slideItemList.length - 1) {
        nextSlideIndex = 0;
      }

      transitionTo(nextSlideIndex);
    }, 5000);

    return () => {
      clearInterval(autoSlideMover);
    };
  }, [slideIndex]);

  return (
    <Styled.Wrap>
      <Styled.Container>
        <MainImageSlideBox slideIndex={slideIndex} />
        <SubImageSlideBox
          slideIndex={slideIndex}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          movement={movement}
          transitionTo={transitionTo}
        />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 32%;
  right: 15%;

  z-index: 100;

  width: 60%;
`;

Styled.Container = styled.div`
  position: relative;
  top: 0;
  right: 0;

  width: 100%;
`;

Styled.MainImageSlideBox = styled.div`
  position: relative;

  display: inline-block;

  width: 100%;
  max-width: 1074px;

  height: 100%;
  max-height: 504px;

  img {
    width: 100%;
  }
`;

Styled.SubImageSlideBox = styled.div`
  position: relative;

  display: inline-block;

  width: 100%;
  max-width: 1074px;

  height: calc(60vw * 0.094);
  max-height: 100px;

  margin-top: 10px;

  .sub-box-item-list {
    width: 100%;
    height: 100%;
    max-height: 100px;

    overflow: hidden;

    .item-swiper {
      height: 100%;
      max-height: 100px;

      display: flex;
      overflow-x: visible;

      transition-property: transform;
      will-change: transform;

      transition: all 1s;

      .sub-box-item {
        position: relative;

        height: 100%;
        max-height: 100px;

        margin-right: 0.7%;

        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 12.6%;

        transition: all 0.3s;
        opacity: 0.5;

        border-radius: 2%;

        overflow: hidden;

        img {
          position: relative;
          left: 50%;
          transform: translate(-50%, 0);

          width: inherit;
          height: 100%;
          max-height: 100px;
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
`;

Styled.MenuInfoBoxWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

Styled.MenuInfoBox = styled.div`
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
          font-size: 0.8vw;
          line-height: 1.67;
          letter-spacing: 1.09px;
          color: #fca800;

          margin-bottom: 5px;
        }

        .menu-name {
          font-family: 'S-CoreDream-5';
          font-size: 1.4vw;

          line-height: 1.5;
          letter-spacing: -0.8px;
        }

        .store-address {
          margin-top: 15px;

          font-size: 0.8vw;

          font-family: 'S-CoreDream-3';
          line-height: 2.17;
        }
      }
      .menu-index-text {
        position: absolute;
        top: 15px;
        right: 10%;

        font-size: 0.8vw;
        line-height: 1.82;
      }
    }
  }
`;
