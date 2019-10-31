import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash-es/clamp';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';

import mediaConf from 'configure/mediaConfig';

import ImgPhone from './Images/ImgPhone@3x.png';
import ImgScreen from './Images/ImgScreen@3x.png';
import ImgBackground from './Images/BgHowto@3x.png';

function BackgroundImg() {
  return (
    <Styled.PhoneBackgroundImageBoxWrap>
      <Styled.PhoneBackgroundImageBox>
        <div className="background-image">
          <img src={ImgBackground} alt="Background" draggable="false" />
        </div>
      </Styled.PhoneBackgroundImageBox>
    </Styled.PhoneBackgroundImageBoxWrap>
  );
}

function PhoneBox() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    // eslint-disable-next-line no-param-reassign
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    });
  });

  return (
    <Styled.PhoneBoxWrap>
      <animated.div
        className="phone-box"
        {...bind()}
        style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}
      >
        <img src={ImgPhone} alt="Phone" draggable="false" />

        <div className="screen-box-wrap">
          <div className="screen-box">
            <img src={ImgScreen} alt="Screen" draggable="false" />
          </div>
        </div>
      </animated.div>
    </Styled.PhoneBoxWrap>
  );
}

function TextBox() {
  return (
    <Styled.TextBoxWrap>
      <Styled.TextBox>
        바쁘실 땐, 여유있게
        <br />
        <span className="highlight">잇플</span>을 사용하세요
      </Styled.TextBox>
    </Styled.TextBoxWrap>
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
  const trans = pos => `translate3d(${pos * 100}%, 0px,0)`;

  const [props, set] = useSpring(() => ({
    position: selected,
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { position } = props;

  set({ position: selected });

  return (
    <Styled.SelectCategoryBoxWrap>
      <Styled.SelectCategoryBox>
        <div className="category-box">
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

          <div className="line-box">
            <animated.div
              className="hover-line-wrap"
              style={{ transform: position.interpolate(trans) }}
            >
              <div className="hover-line" />
            </animated.div>

            <div className="divider-line" />
          </div>
        </div>
        <div className="sub-text-box-wrap">
          <div className="sub-text-box">{mapArray[selected].subText}</div>
        </div>
      </Styled.SelectCategoryBox>
    </Styled.SelectCategoryBoxWrap>
  );
}
SelectCategoryBox.propTypes = {
  mapArray: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  selectHandler: PropTypes.func.isRequired,
  position: PropTypes.object,
};
SelectCategoryBox.defaultProps = {
  position: {},
};

export default function ContentTutorial() {
  const [selected, setSelected] = useState(0);

  return (
    <Styled.Section>
      <BackgroundImg />
      <PhoneBox selected={selected} />
      <Styled.Container>
        <TextBox />
        <SelectCategoryBox mapArray={categoryMap} selected={selected} selectHandler={setSelected} />
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};
Styled.PhoneScreenWidth = '24vw';

Styled.Section = styled.div`
  position: relative;

  width: 100vw;
  height: 70vw;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

Styled.PhoneBoxWrap = styled.div`
  position: absolute;
  top: 10vh;
  right: 15.4em;

  z-index: 100;

  .phone-box {
    width: ${Styled.PhoneScreenWidth};
    max-width: 445px;

    cursor: -webkit-grab;

    .screen-box-wrap {
      position: absolute;
      top: 0;

      padding: calc(24vw * 0.044);
      width: ${Styled.PhoneScreenWidth};
      max-width: 445px;

      text-align: center;

      .screen-box {
        position: relative;
        display: inline-block;

        width: calc(${Styled.PhoneScreenWidth} * 0.883146);
        max-width: 393px;
      }
    }
  }
`;

Styled.PhoneBackgroundImageBoxWrap = styled.div`
  position: absolute;
  top: 0vh;
  right: 0vw;
`;

Styled.PhoneBackgroundImageBox = styled.div`
  height: 38vh;
  overflow: hidden;

  .background-image {
    width: 35vw;
  }
`;

Styled.TextBoxWrap = styled.div`
  position: relative;
  top: 36vh;
`;

Styled.TextBox = styled.div`
  text-align: left;
  font-family: 'S-CoreDream-5';
  font-size: 3em;
  line-height: 1.46;

  .highlight {
    color: #fca800;
  }
`;

Styled.SelectCategoryBoxWrap = styled.div`
  position: relative;
  top: 45vh;
`;

Styled.SelectCategoryBox = styled.div`
  width: 30em;
  text-align: left;

  .category-box {
    display: inline-block;

    ul {
      li {
        display: inline-block;

        margin: 2vh 1.2em 0vh 0em;
        color: #aaaaaa;

        font-size: 1.4em;
        font-family: 'S-CoreDream-5';
        letter-spacing: -0.93px;
        line-height: 1.29;

        transition: all ease 0.6s 0s;
      }

      li:last-child {
        margin: 2vh 0vw 0vh 0vw;
      }

      li:hover {
        color: #222222;
      }
    }

    .line-box {
      width: 100%;
      margin: 0 auto;

      .divider-line {
        width: 100%;
        height: 1px;
        border: solid 1px #ececed;
      }

      .hover-line-wrap {
        position: relative;
        top: -1px;

        width: 25%;

        .hover-line {
          position: relative;
          bottom: -4px;

          width: 100%;

          margin: 0 auto;

          height: 1px;

          border-bottom: solid 4px #1c1c1c;
        }
      }
    }

    .selected-category {
      color: #222222;

      button {
        padding-bottom: 14px;
      }
    }
  }

  .sub-text-box-wrap {
    position: relative;
    top: 2vh;

    .sub-text-box {
      font-size: 1.2em;
      font-family: 'S-CoreDream-3';
      line-height: 2.67;
      color: #1c1c1c;
    }
  }
`;
