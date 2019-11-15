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
      <img src={partnersInfo[slideIndex].mainImage} alt="Button" draggable="false" />
    </Styled.MainImageSlideBox>
  );
}
MainImageSlideBox.propTypes = {
  partnersInfo: PropType.array.isRequired,
  slideIndex: PropType.number.isRequired,
};

export default function MenuSlider({ partnersInfo }) {
  const [slideIndex, setSlideIndex] = useState(0);

  function prevSlide() {
    let nextSlideIndex = slideIndex - 1;

    if (nextSlideIndex < 0) {
      nextSlideIndex = partnersInfo.length - 1;
    }

    setSlideIndex(nextSlideIndex);
  }

  function nextSlide() {
    let nextSlideIndex = slideIndex + 1;

    if (slideIndex >= partnersInfo.length - 1) {
      nextSlideIndex = 0;
    }
    setSlideIndex(nextSlideIndex);
  }

  useEffect(() => {
    const autoSlideMover = setInterval(() => {
      let nextSlideIndex = slideIndex + 1;

      if (slideIndex >= partnersInfo.length - 1) {
        nextSlideIndex = 0;
      }

      setSlideIndex(nextSlideIndex);
    }, 5000);

    return () => {
      clearInterval(autoSlideMover);
    };
  }, [partnersInfo, slideIndex]);

  return (
    <Styled.Wrap>
      <Styled.Container>
        <MenuInfoBox
          partnersInfo={partnersInfo}
          slideIndex={slideIndex}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
        <MainImageSlideBox partnersInfo={partnersInfo} slideIndex={slideIndex} />
      </Styled.Container>
    </Styled.Wrap>
  );
}
MenuSlider.propTypes = {
  partnersInfo: PropType.array.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 60%;
  left: 0;

  width: 100%;
  height: 35%;

  background-color: #f8f8fa;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
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

  width: 100%;
  height: 68%;

  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    height: 100%;
  }
`;

Styled.MenuInfoBoxWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 25%;
`;

Styled.MenuInfoBox = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  .slider-text-box-wrap {
    position: relative;
    top: 30%;
    left: 0;

    width: 100%;
    height: 100%;

    .slider-text-box {
      position: relative;

      width: 100%;
      height: 100%;

      font-family: 'S-CoreDream-5';
      color: #000000;
      text-align: left;

      .store-name {
        font-size: 3vw;
        line-height: 1.67;
        color: #fca800;

        @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
          font-size: 12px;
        }
      }

      .menu-name {
        font-size: 4.6vw;
        line-height: 1.5;

        @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
          font-size: 18px;
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

  z-index: 100;
`;

StyledMenuInfoBox.ButtonBox = styled.div`
  display: inline-block;

  .button {
    width: 10vw;
    max-width: 48px;

    img {
      width: 100%;
    }
  }
`;
