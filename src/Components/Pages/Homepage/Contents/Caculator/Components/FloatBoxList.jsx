import React, { useEffect, useRef } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import ScrollAnimation from 'react-animate-on-scroll';

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
  const [floatAnimation, set] = useSpring(() => ({
    value: 0,
    config: { mass: 1, tension: 55, friction: 11 },
    delay: 0,
    duration: 0,
  }));

  const { value } = floatAnimation;

  const prevProgress = usePrevious({ pageIndex, progress, pages, won, count });

  function trans(idx, idxMax) {
    return `translate3d(0, -${(idx / idxMax) * 100}%, 0)`;
  }

  useEffect(() => {
    if (prevProgress !== progress) {
      set({ value: ((pageIndex + progress) / pages) * FoodCategoryMap.length - 1 });
    }
  }, [pageIndex, progress, pages, prevProgress, set]);

  return (
    <Styled.Wrap>
      <Styled.Container>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
          <animated.div
            style={{
              transform: value.interpolate(idx => `${trans(idx, FoodCategoryMap.length)}`),
            }}
          >
            {FoodCategoryMap.map(entryCategory => {
              return (
                <Styled.FloatBoxWrap key={entryCategory.menuName}>
                  <FloatBox
                    src={entryCategory.image}
                    menuPrice={entryCategory.menuPrice}
                    menuName={entryCategory.menuName}
                  />
                </Styled.FloatBoxWrap>
              );
            })}
          </animated.div>
        </ScrollAnimation>
      </Styled.Container>
    </Styled.Wrap>
  );
}
FloatBoxList.propTypes = {
  pageIndex: PropType.number,
  progress: PropType.number,
  pages: PropType.number,
  won: PropType.number,
  count: PropType.number,
};
FloatBoxList.defaultProps = {
  pageIndex: 0,
  progress: 0,
  pages: 0,
  won: 0,
  count: 0,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  width: 100%;
`;

Styled.Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

Styled.FloatBoxWrap = styled.div`
  margin-bottom: 10%;
`;
