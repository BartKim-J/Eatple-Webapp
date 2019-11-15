import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

import mediaConf from 'configure/mediaConfig';

import BackgroundBox from './Components/BackgroundBox';
import FloatBoxList from './Components/FloatBoxList';
import FloatImageBox from './Components/FloatImageBox';
import FloatText from './Components/FloatText';

import MobileBackgroundBox from './ComponentsMobile/BackgroundBox';
import MobileFloatBoxList from './ComponentsMobile/FloatBoxList';
import MobileFloatImageBox from './ComponentsMobile/FloatImageBox';
import MobileFloatText from './ComponentsMobile/FloatText';

function Content({ scrollY }) {
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
Content.propTypes = {
  scrollY: PropTypes.object,
};
Content.defaultProps = {
  scrollY: 0,
};

function ContentMobile({ scrollY }) {
  return (
    <StyledMobile.Section>
      <MobileBackgroundBox />
      <MobileFloatImageBox />
      <StyledMobile.Container>
        <MobileFloatBoxList scrollY={scrollY} />
        <MobileFloatText />
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}
ContentMobile.propTypes = {
  scrollY: PropTypes.object,
};
ContentMobile.defaultProps = {
  scrollY: 0,
};

export default function CotentMembership() {
  const calc = scrollY => {
    return scrollY;
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
    <>
      <Content scrollY={scrollY} />
      <ContentMobile scrollY={scrollY} />
    </>
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

  overflow: hidden;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
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

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow-y: visible;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;
