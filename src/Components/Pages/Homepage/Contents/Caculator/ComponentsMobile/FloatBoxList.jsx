import React, { useEffect, useRef } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

import FloatBox from './FloatBox';

import FoodCategoryMap from '../FoodCategoryMap';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export default function FloatBoxList({ pageIndex, progress, pages, won, count }) {
  const countMax = pages * 10;

  const [floatAnimation, set] = useSpring(() => ({
    value: 0,
    config: { mass: 1, tension: 55, friction: 11 },
    delay: 0,
    duration: 0,
  }));

  const { value } = floatAnimation;

  const prevProgress = usePrevious({ pageIndex, progress, pages });

  function trans(idx) {
    return `translate3d(-${idx * 100}%, 0, 0)`;
  }

  useEffect(() => {
    let nextIndex = 0;

    if (prevProgress !== progress) {
      for (let i = 0; i < FoodCategoryMap.length; i += 1) {
        if (won >= FoodCategoryMap[i].menuPrice) {
          nextIndex = i;
        }
      }

      set({ value: nextIndex });
    }
  }, [pageIndex, progress, pages, count, prevProgress, countMax, won, set]);

  return (
    <Styled.Wrap>
      <Styled.Container>
        <animated.div
          style={{
            transform: value.interpolate(idx => `${trans(idx)}`),
          }}
        >
          <Styled.Swriper menuCnt={FoodCategoryMap.length}>
            {FoodCategoryMap.map(entryCategory => {
              return (
                <Styled.Item key={entryCategory.menuName} menuCnt={FoodCategoryMap.length}>
                  <FloatBox
                    src={entryCategory.image}
                    menuPrice={entryCategory.menuPrice}
                    menuName={entryCategory.menuName}
                  />
                </Styled.Item>
              );
            })}
          </Styled.Swriper>
        </animated.div>
      </Styled.Container>
    </Styled.Wrap>
  );
}
FloatBoxList.propTypes = {
  pageIndex: PropType.number,
  progress: PropType.number,
  pages: PropType.number,
  count: PropType.number,
  won: PropType.number,
};
FloatBoxList.defaultProps = {
  pageIndex: 0,
  progress: 0,
  pages: 0,
  count: 0,
  won: 0,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  transform: translate(-0%, -100%);
`;

Styled.Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

Styled.Swriper = styled.div`
  width: ${props => {
    return `${100 * props.menuCnt}%`;
  }};
  height: 100%;

  display: flex;
  overflow: visible;

  transition-property: transform;
  will-change: transform;
`;

Styled.Item = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: ${props => {
    return `${100 / props.menuCnt}%`;
  }};

  width: ${props => {
    return `${100 / props.menuCnt}%`;
  }};

  height: 100%;
`;
