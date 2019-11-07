import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

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
];

function MenuInfoBox({ prevSlide, nextSlide, slideIndex }) {
  const StyledMenuInfoBox = {};

  StyledMenuInfoBox.ButtonBoxWrap = styled.div`
    position: absolute;
    right: 0;
    top: 0;
  `;

  StyledMenuInfoBox.ButtonBox = styled.div`
    display: inline-block;

    .button {
      width: 8vw;
      max-width: 48px;

      img {
        width: 100%;
      }
    }
  `;

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
          <div className="store-name">{slideItemList[slideIndex].storeName}</div>
          <div className="menu-name">{slideItemList[slideIndex].menuName}</div>
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
        <MenuInfoBox slideIndex={slideIndex} prevSlide={prevSlide} nextSlide={nextSlide} />
        <MainImageSlideBox slideIndex={slideIndex} />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 60%;
  left: 0;

  z-index: 100;

  width: 100%;
  height: 35%;
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
  height: 75%;

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
