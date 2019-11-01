import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

import mediaConf from 'configure/mediaConfig';

import FloatBoxList from './Components/FloatBoxList';
import FloatImageBox from './Components/FloatImageBox';
import FloatText from './Components/FloatText';

const SCROLL_ANCHOR_POINRT = window.innerHeight * 0.73;

function BackgroundBox() {
  return (
    <Styled.BackgroundBoxWrap>
      <Styled.BackgroundBox />
    </Styled.BackgroundBoxWrap>
  );
}

export default function CotentMembership() {
  const calc = scrollY => {
    let retValue = scrollY - window.scrollY / 4;

    if (retValue >= SCROLL_ANCHOR_POINRT) {
      retValue = SCROLL_ANCHOR_POINRT;
    }
    return retValue;
  };

  const [props, set] = useSpring(() => ({
    scrollY: 0,
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { scrollY } = props;

  function scrollHandler() {
    set({ scrollY: calc(window.scrollY) });
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <Styled.Section>
      <Styled.Container>
        <BackgroundBox />

        <FloatBoxList scrollY={scrollY} />

        <FloatImageBox />
        <FloatText />
      </Styled.Container>
    </Styled.Section>
  );
}
CotentMembership.propTypes = {
  scrollY: PropTypes.number,
};
CotentMembership.defaultProps = {
  scrollY: 0,
};

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow-y: visible;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  @media (max-aspect-ratio: 1/1) {
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Container = styled.div`
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;

Styled.BackgroundBoxWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

Styled.BackgroundBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 70%;
  height: 120%;

  background-color: #f8f8fa;
`;
