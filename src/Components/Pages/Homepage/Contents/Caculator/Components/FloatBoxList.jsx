import React, { useState, useEffect, useRef } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import { animated } from 'react-spring';

import FloatBox from './FloatBox';

import ImgMenu1 from '../Images/photo01.png';
import ImgMenu2 from '../Images/photo02.png';
import ImgMenu3 from '../Images/photo03.png';
import ImgMenu4 from '../Images/photo04.png';
import ImgMenu5 from '../Images/photo05.png';
import ImgMenu6 from '../Images/photo06.png';
import ImgMenu7 from '../Images/photo07.png';

const CategoryMap = [
  {
    menuPrice: 10000,
    menuName: '연어덮밥',
    image: ImgMenu1,
  },
  {
    menuPrice: 26000,
    menuName: '유린기',
    image: ImgMenu2,
  },
  {
    menuPrice: 38000,
    menuName: '한우등심',
    image: ImgMenu3,
  },
  {
    menuPrice: 50000,
    menuName: '모듬 사시미',
    image: ImgMenu4,
  },
  {
    menuPrice: 80000,
    menuName: '스시 오마카세',
    image: ImgMenu5,
  },
  {
    menuPrice: 139000,
    menuName: '한우 오마카세 시그니처 코스',
    image: ImgMenu6,
  },
  {
    menuPrice: 214000,
    menuName: '롯데타워 시그니엘 코스요리',
    image: ImgMenu7,
  },
];

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export default function FloatBoxList({ pageIndex, progress, pages, won, count }) {
  const countMax = pages * 10;
  const [index, setIndex] = useState((CategoryMap.length * (count / countMax)).toFixed(0));

  function trans() {
    return `translate3d(0, -${(index / CategoryMap.length) * 100}%, 0)`;
  }

  const prevProgress = usePrevious({ pageIndex, progress, pages });

  useEffect(() => {
    let nextIndex = 0;

    if (prevProgress !== progress) {
      for (let i = 0; i < CategoryMap.length; i += 1) {
        if (won >= CategoryMap[i].menuPrice) {
          nextIndex = i;
        }
      }

      setIndex(nextIndex);
    }
  }, [index, pageIndex, progress, pages, count, prevProgress, countMax, won]);

  return (
    <Styled.Wrap>
      <Styled.Container>
        <animated.div
          style={{
            transform: `${trans()}`,
            transition: `all 0.6s`,
          }}
        >
          {CategoryMap.map(entryCategory => {
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
