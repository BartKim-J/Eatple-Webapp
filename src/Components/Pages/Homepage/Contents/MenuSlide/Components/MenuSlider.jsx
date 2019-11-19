import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ImgBtnSlideLeft from '../Images/BtnLeft.svg';
import ImgBtnSlideRight from '../Images/BtnRight.svg';

function MenuInfoBox({ partnersInfo, prevSlide, nextSlide, slideIndex }) {
  function SliderButtonBox() {
    return (
      <StyledMenuInfoBox.ButtonBoxWrap>
        <StyledMenuInfoBox.ButtonBox>
          <button type="button" className="button" onClick={prevSlide}>
            <img src={ImgBtnSlideLeft} alt="Button" draggable="false" />
          </button>
          <button type="button" className="button" onClick={nextSlide}>
            <img src={ImgBtnSlideRight} alt="Button" draggable="false" />
          </button>
        </StyledMenuInfoBox.ButtonBox>
      </StyledMenuInfoBox.ButtonBoxWrap>
    );
  }

  function InfoTextBox() {
    return (
      <div className="slider-text-box-wrap">
        <div className="slider-text-box">
          <div className="store-name">{partnersInfo[slideIndex].storeName}</div>
          <div className="menu-name">{partnersInfo[slideIndex].menuName}</div>
          <div className="store-address">{partnersInfo[slideIndex].storeAddress}</div>
          <div className="menu-index-text">{`${slideIndex + 1}/${partnersInfo.length}`}</div>
        </div>
      </div>
    );
  }
  return (
    <Styled.MenuInfoBoxWrap>
      <Styled.MenuInfoBox>
        <SliderButtonBox />
        <InfoTextBox />
      </Styled.MenuInfoBox>
    </Styled.MenuInfoBoxWrap>
  );
}
MenuInfoBox.propTypes = {
  partnersInfo: PropType.array.isRequired,
  slideIndex: PropType.number.isRequired,
  prevSlide: PropType.func.isRequired,
  nextSlide: PropType.func.isRequired,
};

function MainImageSlideBox({ partnersInfo, slideIndex }) {
  return (
    <Styled.MainImageSlideBox>
      <Styled.ImageBox src={partnersInfo[slideIndex].mainImage} />
    </Styled.MainImageSlideBox>
  );
}
MainImageSlideBox.propTypes = {
  partnersInfo: PropType.array.isRequired,
  slideIndex: PropType.number.isRequired,
};

function SubImageSlideBox({
  partnersInfo,
  slideIndex,
  movement,
  transitionTo,
  prevSlide,
  nextSlide,
}) {
  return (
    <Styled.SubImageSlideBox>
      <div className="sub-box-item-list">
        <div
          role="button"
          className="item-swiper"
          style={{
            transform: `translateX(${-19.3 * movement}%)`,
            width: `${partnersInfo.length} * 15%`,
          }}
          tabIndex={0}
        >
          {partnersInfo.map((slideItem, index) => {
            let className = 'sub-box-item';

            if (index === slideIndex) {
              className += ' sub-box-item-selected';
            }

            return (
              <button
                id={slideItem.storeName}
                aria-label={slideItem.storeName}
                type="button"
                key={slideItem.storeName}
                className={className}
                onClick={() => {
                  transitionTo(index);
                }}
              >
                <Styled.ImageBox src={slideItem.subImage} />
              </button>
            );
          })}
        </div>
      </div>
      <MenuInfoBox
        partnersInfo={partnersInfo}
        slideIndex={slideIndex}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </Styled.SubImageSlideBox>
  );
}
SubImageSlideBox.propTypes = {
  partnersInfo: PropType.array.isRequired,
  slideIndex: PropType.number.isRequired,
  movement: PropType.number.isRequired,
  transitionTo: PropType.func.isRequired,
  prevSlide: PropType.func.isRequired,
  nextSlide: PropType.func.isRequired,
};

export default function MenuSlider({ partnersInfo }) {
  const minImageCount = 3;

  const [slideIndex, setSlideIndex] = useState(0);
  const [movement, setMovement] = useState(0);

  function transitionTo(pos) {
    if (pos <= partnersInfo.length - minImageCount) {
      setMovement(pos);
    } else {
      setMovement(partnersInfo.length - minImageCount);
    }

    setSlideIndex(pos);
  }

  function prevSlide() {
    let nextSlideIndex = slideIndex - 1;

    if (nextSlideIndex < 0) {
      nextSlideIndex = partnersInfo.length - 1;
    }

    transitionTo(nextSlideIndex);
  }

  function nextSlide() {
    let nextSlideIndex = slideIndex + 1;

    if (slideIndex >= partnersInfo.length - 1) {
      nextSlideIndex = 0;
    }

    transitionTo(nextSlideIndex);
  }

  useEffect(() => {
    const autoSlideMover = setInterval(() => {
      let nextSlideIndex = slideIndex + 1;

      if (slideIndex >= partnersInfo.length - 1) {
        nextSlideIndex = 0;
      }

      transitionTo(nextSlideIndex);
    }, 5000);

    return () => {
      clearInterval(autoSlideMover);
    };
  });

  return (
    <Styled.Wrap>
      <Styled.Container>
        <MainImageSlideBox partnersInfo={partnersInfo} slideIndex={slideIndex} />
        <SubImageSlideBox
          partnersInfo={partnersInfo}
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
MenuSlider.propTypes = {
  partnersInfo: PropType.array.isRequired,
};

const Styled = {};
const MenuSliderWidth = '52vw';
const MenuMainBoxWidth = MenuSliderWidth;
const MenuSubBoxWidth = MenuMainBoxWidth;

Styled.Wrap = styled.div`
  position: absolute;
  top: 40%;
  right: 0%;

  z-index: 100;

  width: ${MenuSliderWidth};
  max-width: 1074px;

  height: calc(${MenuMainBoxWidth} * 0.5716);
  max-height: 614px;
`;

Styled.Container = styled.div`
  position: relative;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
`;

Styled.MainImageSlideBox = styled.div`
  position: relative;

  display: inline-block;

  width: ${MenuMainBoxWidth};
  max-width: 1074px;

  height: calc(${MenuMainBoxWidth} * 0.4692);
  max-height: 504px;
`;

Styled.SubImageSlideBox = styled.div`
  position: relative;

  display: inline-block;

  width: ${MenuSubBoxWidth};
  max-width: 1074px;

  height: calc(${MenuSubBoxWidth} * 0.093);
  max-height: 100px;

  .sub-box-item-list {
    width: 100%;
    height: 100%;

    overflow: hidden;

    .item-swiper {
      height: 100%;

      display: flex;
      overflow-x: visible;

      transition-property: transform;
      will-change: transform;

      transition: all 1s;

      .sub-box-item {
        position: relative;

        height: 100%;
        max-height: 100px;

        margin-right: 0.8%;

        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 18.6%;

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

  width: 41.8%;
  height: 180%;
`;

Styled.MenuInfoBox = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  background-color: #1c1c1c;

  .slider-text-box-wrap {
    position: relative;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    .slider-text-box {
      position: relative;

      width: 100%;
      height: 100%;

      color: #ffffff;

      text-align: left;

      padding: 5% 10%;

      .store-name {
        font-family: 'S-CoreDream-Bold';
        font-size: 0.8vw;
        line-height: 1.67;
        letter-spacing: 1.09px;
        color: #fca800;

        @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
          font-size: 12px;
        }
      }

      .menu-name {
        font-family: 'S-CoreDream-Bold';
        font-size: 1.4vw;
        line-height: 1.5;
        letter-spacing: -0.8px;

        @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
          font-size: 24px;
        }
      }

      .store-address {
        position: absolute;
        bottom: 15%;
        left: 10%;

        font-size: 0.8vw;
        font-family: 'S-CoreDream';
        line-height: 2.17;
        color: #ffffff;

        @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
          font-size: 13px;
        }
      }

      .menu-index-text {
        position: absolute;
        top: 10%;
        right: 10%;

        font-size: 0.8vw;
        line-height: 1.82;

        @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
          font-size: 11px;
        }
      }
    }
  }
`;

const StyledMenuInfoBox = {};

StyledMenuInfoBox.ButtonBoxWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

StyledMenuInfoBox.ButtonBox = styled.div`
  display: inline-block;

  .button {
    width: 4vw;
    max-width: 48px;

    transform: translate(0, -100%);

    img {
      width: 100%;
    }
  }
`;

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};
  background-position: center center;
  background-size: cover;
`;
