import React, { useState, useEffect, useRef } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import AnimatedNumber from 'react-animated-number';

import mediaConf from 'configure/mediaConfig';

import ImgContainer from '../Images/ImgContainer.svg';

import FloatBoxList from './FloatBoxList';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export default function ResultViewBox({ pageIndex, progress, pages }) {
  const countInit = 2;
  const eatplePrice = 5500;
  const seoulPrice = 9030;

  const [count, setCount] = useState(countInit + pageIndex * 10 + progress * 10);
  const [won, setWon] = useState(count.toFixed(0) * seoulPrice - count.toFixed(0) * eatplePrice);

  const prevProgress = usePrevious({ pageIndex, progress, pages });

  useEffect(() => {
    if (prevProgress !== progress) {
      setCount(countInit + pageIndex * 10 + progress * 10);
      setWon(count.toFixed(0) * seoulPrice - count.toFixed(0) * eatplePrice);
    }
  }, [pageIndex, progress, pages, count, prevProgress]);

  const animationDuration = 300; // ms

  return (
    <Styled.Wrap>
      <FloatBoxList
        pageIndex={pageIndex}
        progress={progress}
        pages={pages}
        count={count}
        won={won}
      />

      <Styled.Container>
        <Styled.BackgroundImgWrap>
          <img src={ImgContainer} alt="Container" />
        </Styled.BackgroundImgWrap>
        <Styled.TextBoxWrap>
          <Styled.TextBox>
            한달에
            <br />
            <Styled.TextHighlight>
              <AnimatedNumber
                style={{
                  transition: '0.8s ease-out',
                  transitionProperty: 'background-color, color',
                }}
                key={count}
                value={count}
                initialValue={count * 1.0}
                stepPrecision={0}
                formatValue={n => `${parseFloat(n).toFixed(0)}번`}
                duration={100}
              />
            </Styled.TextHighlight>
            <br />
            잇플로 식사하고
            <br />
            <Styled.TextHighlight>
              <AnimatedNumber
                style={{
                  transition: '0.8s ease-out',
                  transitionProperty: 'background-color, color',
                }}
                key={won}
                value={won}
                initialValue={won * 1.1}
                stepPrecision={0}
                formatValue={n => `${parseFloat(n).toLocaleString()}원`}
                duration={animationDuration}
              />
            </Styled.TextHighlight>
            의
            <br />
            더해지는 가치를 경험하세요.
          </Styled.TextBox>
        </Styled.TextBoxWrap>
      </Styled.Container>
    </Styled.Wrap>
  );
}
ResultViewBox.propTypes = {
  pageIndex: PropType.number,
  progress: PropType.number,
  pages: PropType.number,
};
ResultViewBox.defaultProps = {
  pageIndex: 0,
  progress: 0,
  pages: 0,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  bottom: 15%;
  left: 0;

  width: 100%;
`;

Styled.Container = styled.div`
  position: relative;

  width: 33vw;
  max-width: 474px;

  height: calc(33vw * 0.6827);
  max-height: 359px;

  img {
    width: 100%;
  }
`;

Styled.TextBoxWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;

  z-index: 110;

  display: table;
  width: 100%;
  height: 100%;

  padding-left: 10%;
`;

Styled.TextBox = styled.div`
  display: table-cell;
  vertical-align: middle;

  text-align: left;

  font-size: 1.6vw;
  font-family: 'S-CoreDream-Bold';
  line-height: 1.72;
  color: #ffffff;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 28px;
  }
`;

Styled.TextHighlight = styled.span`
  color: #fca800;
  font-family: 'S-CoreDream-Bold';
`;

Styled.BackgroundImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 100;

  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
