import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

export default function TutorialBox({ mapArray, selected, selectHandler }) {
  const [props, set] = useSpring(() => ({
    position: selected,
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { position } = props;

  function trans(pos) {
    if (selected !== 0) {
      return `translate3d(calc(${pos * 100}% + ${pos * 19}%), 0px,0)`;
    }
    return `translate3d(${pos * 100}%, 0px,0)`;
  }

  set({ position: selected });

  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.ItemListBox>
          <ul>
            {mapArray.map((entryCategory, i) => {
              let className = 'item';
              if (selected === i) {
                className += ' item-selected';
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

          <Styled.HoverLineBox>
            <animated.div
              className="hover-line-wrap"
              style={{ transform: position.interpolate(trans) }}
            >
              <div className="hover-line" />
            </animated.div>

            <div className="divider-line" />
          </Styled.HoverLineBox>
        </Styled.ItemListBox>

        <Styled.TutorialTextWrap>
          <Styled.TutorialText>{mapArray[selected].subText}</Styled.TutorialText>
        </Styled.TutorialTextWrap>
      </Styled.Container>
    </Styled.Wrap>
  );
}
TutorialBox.propTypes = {
  mapArray: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  selectHandler: PropTypes.func.isRequired,
  position: PropTypes.object,
};
TutorialBox.defaultProps = {
  position: {},
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  bottom: 35%;
  left: 0;
`;

Styled.Container = styled.div`
  position: relative;
`;

Styled.ItemListBox = styled.div`
  display: inline-block;

  ul {
    .item-selected {
      color: #222222 !important;

      button {
        padding-bottom: 14px;
      }
    }

    .item {
      display: inline-block;

      margin: 2vh 1.2em 0vh 0em;
      color: #aaaaaa;

      font-size: 1.8vw;
      font-family: 'S-CoreDream-5';
      letter-spacing: -0.93;
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
`;

Styled.HoverLineBox = styled.div`
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

    width: calc(25% - 3%);

    .hover-line {
      position: relative;
      bottom: -4px;

      width: 100%;

      margin: 0 auto;

      height: 1px;

      border-bottom: solid 4px #1c1c1c;
    }
  }
`;

Styled.TutorialTextWrap = styled.div`
  margin-top: 25px;
`;

Styled.TutorialText = styled.div`
  text-align: left;

  font-size: 1.4vw;
  font-family: 'S-CoreDream-3';
  line-height: 2.67;
  color: #1c1c1c;
`;
