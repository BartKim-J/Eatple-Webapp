import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import ImgPhone from './Images/ImgPhone@3x.png';
import ImgScreen from './Images/ImgScreen@3x.png';
import ImgBackground from './Images/BgCalculator@3x.png';

function BackgroundImg() {
  return (
    <div className="content-tutorial-background-image-box-wrap">
      <div className="content-tutorial-background-image-box">
        <img src={ImgBackground} alt="Background" />
      </div>
    </div>
  );
}

function PhoneBox() {
  return (
    <div className="content-tutorial-phone-box-wrap">
      <div className="content-tutorial-phone-box">
        <img src={ImgPhone} alt="Phone" />

        <div className="content-tutorial-screen-box-wrap">
          <div className="content-tutorial-screen-box">
            <img src={ImgScreen} alt="Screen" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextBox() {
  return (
    <div className="content-tutorial-text-box-wrap">
      <div className="content-tutorial-text-box">
        바쁘실 땐, 여유있게
        <br />
        <span className="highlight">잇플</span>을 사용하세요
      </div>
    </div>
  );
}

const categoryMap = [
  {
    category: '플친맺기',
    subText: '카카오 플친으로 편리하게 주문하세요.',
  },
  {
    category: '검색하기',
    subText: '카카오 플친으로 편리하게 검색하세요.',
  },
  {
    category: '예약하기',
    subText: '카카오 플친으로 편리하게 예약하세요.',
  },
  {
    category: '픽업하기',
    subText: '카카오 플친으로 편리하게 픽업하세요.',
  },
];

function SelectCategoryBox({ mapArray, selected, selectHandler }) {
  return (
    <div className="content-tutorial-select-category-box-wrap">
      <div className="content-tutorial-select-category-box">
        <ul>
          {mapArray.map((entryCategory, i) => {
            let className = '';
            if (selected === i) {
              className = 'selected-category';
            }
            return (
              <li className={className} key={entryCategory.category}>
                <button
                  type="button"
                  onClick={() => {
                    selectHandler(i);
                  }}
                >
                  {entryCategory.category}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="sub-text-box-wrap">
          <div className="sub-text-box">{mapArray[selected].subText}</div>
        </div>
      </div>
    </div>
  );
}
SelectCategoryBox.propTypes = {
  mapArray: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  selectHandler: PropTypes.func.isRequired,
};

export default function Tutorial() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="content-tutorial-section">
      <div className="content-tutorial-inner">
        <BackgroundImg />
        <PhoneBox selected={selected} />

        <div className="content-tutorial-box-wrap">
          <div className="content-tutorial-box">
            <TextBox />
            <SelectCategoryBox
              mapArray={categoryMap}
              selected={selected}
              selectHandler={setSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
