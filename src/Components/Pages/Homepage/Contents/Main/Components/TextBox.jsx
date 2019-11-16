import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import mediaConf from 'configure/mediaConfig';

import TrialButtonBox from '../../../Shared/Components/TrialButtonBox';

export default function TextBox() {
  const animatedTextBox = useSpring({
    config: { mass: 1, tension: 35, friction: 9 },
    from: { left: '-100%', top: '0%' },
    to: async next => {
      await next({
        left: '0%',
      });
    },
    delay: 1000,
  });

  return (
    <Styled.TextBoxWrap style={animatedTextBox}>
      <Styled.TextBox>
        <div className="title">
          한끼 식사에
          <br />
          가치를 더하다,
          <span className="highlight"> 잇플</span>
          <div className="sub-text">
            잇플은 한끼 식사를 5500원에 해결할 수 있는 테이크아웃 멤버십입니다.
          </div>
        </div>
        <TrialButtonBox />
      </Styled.TextBox>
    </Styled.TextBoxWrap>
  );
}

const Styled = {};

Styled.TextBoxWrap = styled(animated.div)`
  position: relative;

  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: left;
`;

Styled.TextBox = styled.div`
  display: inline-block;

  .title {
    text-align: left;
    font-family: 'S-CoreDream';
    font-size: 4vw;
    line-height: 1.33;

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 60px;
    }
  }

  .highlight {
    font-family: 'S-CoreDream-Bold';
  }

  .sub-text {
    margin-top: 23px;

    font-size: 1vw;

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 18px;
    }
  }
`;
